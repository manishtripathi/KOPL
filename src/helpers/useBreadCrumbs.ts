// hooks/useBreadCrumbHistory.js
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MAX_HISTORY = 10;

const useBreadCrumbHistory = () => {
  const location = useLocation();
  const historyRef:any = useRef([]);
  const [breadcrumbs, setBreadcrumbs]:any = useState([]);

  useEffect(() => {
    const path = location.pathname;

    const currentHistory:any = historyRef.current;

    // Avoid duplicate for same path
    if (currentHistory[currentHistory.length - 1] !== path) {
      currentHistory.push(path);

      // Trim to max allowed history
      if (currentHistory.length > MAX_HISTORY) {
        currentHistory.shift();
      }

      setBreadcrumbs([...currentHistory]);
    }
  }, [location]);

  return breadcrumbs;
};

export default useBreadCrumbHistory;
