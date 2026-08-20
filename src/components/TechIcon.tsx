import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'h-8 w-8' }: TechIconProps) {
  const norm = name.toLowerCase();

  // 1. SQL Database Cylinder (Cilindro clássico de Banco de Dados)
  if (norm.includes('sql')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sql-grad-1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="sql-top" x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
        {/* Camada inferior */}
        <path d="M4 22c0 3.314 5.373 6 12 6s12-2.686 12-6v4c0 3.314-5.373 6-12 6s-12-2.686-12-6v-4z" fill="#0369a1" />
        {/* Camada do meio */}
        <path d="M4 14c0 3.314 5.373 6 12 6s12-2.686 12-6v4c0 3.314-5.373 6-12 6s-12-2.686-12-6v-4z" fill="#0284c7" />
        {/* Camada superior - corpo */}
        <path d="M4 6c0 3.314 5.373 6 12 6s12-2.686 12-6v4c0 3.314-5.373 6-12 6s-12-2.686-12-6v-4z" fill="#0ea5e9" />
        {/* Topo cilíndrico */}
        <ellipse cx="16" cy="6" rx="12" ry="4.5" fill="url(#sql-top)" />
        <ellipse cx="16" cy="6" rx="10" ry="3.5" fill="#7dd3fc" opacity="0.6" />
      </svg>
    );
  }

  // 2. Microsoft Excel (Logo Oficial Fluent 365 com camadas verdes e 'X')
  if (norm.includes('excel')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Fundo da planilha */}
        <rect x="7" y="4" width="21" height="24" rx="2.5" fill="#107C41" />
        {/* Grade interna de células */}
        <rect x="14" y="8" width="5.5" height="4" fill="#33C481" opacity="0.8" />
        <rect x="21" y="8" width="5.5" height="4" fill="#33C481" opacity="0.5" />
        <rect x="14" y="14" width="5.5" height="4" fill="#33C481" opacity="0.6" />
        <rect x="21" y="14" width="5.5" height="4" fill="#33C481" opacity="0.8" />
        <rect x="14" y="20" width="5.5" height="4" fill="#33C481" opacity="0.5" />
        <rect x="21" y="20" width="5.5" height="4" fill="#33C481" opacity="0.6" />
        {/* Bloco frontal em relevo com o 'X' */}
        <rect x="4" y="9" width="14" height="14" rx="2" fill="#185C37" />
        <path
          d="M7.8 12.8l2.2 3.2-2.3 3.2h2l1.3-2.1 1.3 2.1h2l-2.3-3.2 2.2-3.2h-2l-1.2 2-1.2-2H7.8z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 3. Microsoft Power BI (3 barras oficiais)
  if (norm.includes('power bi')) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="16" width="6.5" height="12" rx="1.5" fill="#E6AD00" />
        <rect x="13" y="10" width="6.5" height="18" rx="1.5" fill="#F2C811" />
        <rect x="21" y="4" width="6.5" height="24" rx="1.5" fill="#F6D743" />
        <path d="M11.5 16h8v12h-8z" fill="#DDA000" opacity="0.35" />
      </svg>
    );
  }

  // 4. Python Oficial
  if (norm.includes('python')) {
    return <img src="/icons/python.svg" alt="Python Logo" className={`${className} object-contain shrink-0`} />;
  }

  // 5. Pandas Oficial (Data Quality & Auditoria)
  if (norm.includes('pandas') || norm.includes('qualidade')) {
    return <img src="/icons/pandas.svg" alt="Pandas Logo" className={`${className} object-contain shrink-0`} />;
  }

  // 6. Ferramentas Modernas & IA (Google Gemini AI Star Oficial)
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gemini-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1ba1e3" />
          <stop offset="35%" stopColor="#5b7fff" />
          <stop offset="70%" stopColor="#9b51e0" />
          <stop offset="100%" stopColor="#e056fd" />
        </linearGradient>
      </defs>
      <path
        d="M16 2C16 9.73 9.73 16 2 16C9.73 16 16 22.27 16 30C16 22.27 22.27 16 30 16C22.27 16 16 9.73 16 2Z"
        fill="url(#gemini-grad)"
      />
    </svg>
  );
}