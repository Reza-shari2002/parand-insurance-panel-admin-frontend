import { useState, useEffect } from "react";
import { fetchDocumentBlob } from "../../services/documentService";

export const useSecureImage = (imageUrl) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    let localUrl = null;

    const loadImage = async () => {
      if (!imageUrl) return;

      try {
        setLoading(true);
        setError(null);

        const blobData = await fetchDocumentBlob(imageUrl);
        
        if (active) {
          localUrl = URL.createObjectURL(blobData);
          setImageSrc(localUrl);
        }
      } catch (err) {
        console.error("خطا در دریافت تصویر ایمن:", err);
        if (active) {
          setError(err);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      active = false;
      if (localUrl) {
        URL.revokeObjectURL(localUrl);
      }
    };
  }, [imageUrl]);

  return { imageSrc, loading, error: !!error };
};
