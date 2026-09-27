import { useState, useEffect } from 'react';

const WISHLIST_STORAGE_KEY = 'shree_ambika_jewellers_wishlist';

export function useWishlist() {
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Error reading wishlist from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch (e) {
      console.error('Error saving wishlist to localStorage', e);
    }
  }, [wishlistIds]);

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isInWishlist = (id: string) => wishlistIds.includes(id);

  const clearWishlist = () => setWishlistIds([]);

  return {
    wishlistIds,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
    wishlistCount: wishlistIds.length,
  };
}
