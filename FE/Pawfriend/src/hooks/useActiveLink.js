import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useActiveLink(initialLink = 'overview') {
  const [activeLink, setActiveLink] = useState(initialLink);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    setActiveLink(path);
  }, [location]);

  return { activeLink, setActiveLink };
}
