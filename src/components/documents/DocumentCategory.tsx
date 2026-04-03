"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useDropzone } from "react-dropzone";
import { CloudArrowUpIcon, CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

type UploadedFile = {
  name: string;
  size: number;
};

export default function DocumentCategory({
  categoryKey,
  Icon,
}: {
  categoryKey: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  const t = useTranslations("documents");
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // In production, this would upload to Supabase Storage
    const newFiles = acceptedFiles.map((f) => ({ name: f.name, size: f.size }));
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/heic": [".heic"],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-6 w-6 text-teal-600" />
        <h3 className="font-bold text-gray-900">{t(categoryKey)}</h3>
        {files.length > 0 && (
          <span className="ms-auto text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
            {files.length}
          </span>
        )}
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-teal-400 bg-teal-50"
            : "border-gray-200 hover:border-teal-300 hover:bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />
        <CloudArrowUpIcon className="h-8 w-8 text-gray-400 mx-auto" />
        <p className="mt-2 text-sm text-gray-500">{t("dragDrop")}</p>
        <p className="mt-1 text-xs text-gray-400">{t("maxSize")}</p>
      </div>

      {/* Uploaded files list */}
      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((file, i) => (
            <li key={i} className="flex items-center gap-2 text-sm bg-teal-50 rounded-lg px-3 py-2">
              <CheckCircleIcon className="h-4 w-4 text-teal-500 shrink-0" />
              <span className="flex-1 truncate text-gray-700">{file.name}</span>
              <span className="text-xs text-gray-400">{(file.size / 1024).toFixed(0)}KB</span>
              <button
                onClick={() => removeFile(i)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
