-- Belong Phase 1 Database Schema
-- Run this in Supabase SQL Editor

-- Leads table (central funnel tracking)
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  preferred_language TEXT DEFAULT 'he' CHECK (preferred_language IN ('he', 'en')),
  source TEXT CHECK (source IN ('eligibility_form', 'whatsapp', 'calendly', 'manual')),
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN (
    'new', 'eligible', 'complex', 'not_eligible',
    'consultation_booked', 'consultation_done',
    'payment_pending', 'payment_complete',
    'onboarding', 'active_client', 'closed'
  )),
  access_token UUID DEFAULT gen_random_uuid(),
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE UNIQUE INDEX IF NOT EXISTS idx_leads_access_token ON leads(access_token);

-- Eligibility submissions
CREATE TABLE IF NOT EXISTS eligibility_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  country TEXT,
  current_status TEXT,
  years_in_israel INTEGER,
  has_children BOOLEAN DEFAULT false,
  has_spouse BOOLEAN DEFAULT false,
  has_work BOOLEAN DEFAULT false,
  additional_info TEXT,
  result TEXT CHECK (result IN ('eligible', 'complex', 'not_eligible')),
  result_reason TEXT
);

-- Consultations
CREATE TABLE IF NOT EXISTS consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  calendly_event_id TEXT UNIQUE,
  calendly_invitee_id TEXT,
  scheduled_at TIMESTAMPTZ,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled', 'no_show')),
  meeting_notes TEXT
);

-- Payments (amounts in agorot / ILS cents)
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  package_name TEXT,
  track TEXT CHECK (track IN ('single', 'installments')),
  amount_net INTEGER,
  vat_rate NUMERIC(4,2) DEFAULT 18.00,
  amount_total INTEGER,
  installment_count INTEGER DEFAULT 1,
  morning_link_id TEXT,
  morning_link_url TEXT,
  tranzila_transaction_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN (
    'pending', 'processing', 'completed', 'failed', 'refunded'
  )),
  paid_at TIMESTAMPTZ,
  whatsapp_sent_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_payments_morning ON payments(morning_link_id);

-- Documents
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  category TEXT NOT NULL CHECK (category IN (
    'passport', 'photos', 'residency_proof', 'employment_proof',
    'children_documents', 'power_of_attorney', 'fee_agreement', 'other'
  )),
  file_name TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  storage_path TEXT NOT NULL,
  status TEXT DEFAULT 'uploaded' CHECK (status IN ('uploaded', 'reviewed', 'approved', 'rejected')),
  reviewer_notes TEXT
);

-- Signature requests (HelloSign)
CREATE TABLE IF NOT EXISTS signature_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  document_type TEXT CHECK (document_type IN ('power_of_attorney', 'fee_agreement')),
  hellosign_request_id TEXT UNIQUE,
  status TEXT DEFAULT 'sent' CHECK (status IN ('sent', 'viewed', 'signed', 'declined', 'error')),
  signed_at TIMESTAMPTZ,
  signed_document_path TEXT
);

-- WhatsApp messages log
CREATE TABLE IF NOT EXISTS whatsapp_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  direction TEXT DEFAULT 'outbound' CHECK (direction IN ('outbound', 'inbound')),
  template_name TEXT,
  message_body TEXT,
  whatsapp_message_id TEXT,
  status TEXT DEFAULT 'sent' CHECK (status IN ('sent', 'delivered', 'read', 'failed'))
);

-- Enable RLS on all tables
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE eligibility_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE signature_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE whatsapp_messages ENABLE ROW LEVEL SECURITY;

-- Auto-update updated_at on leads
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
