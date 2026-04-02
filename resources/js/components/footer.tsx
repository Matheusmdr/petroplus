import React from 'react';
import SocialIcons from './social-icons';
import { usePage } from '@inertiajs/react';

const Footer: React.FC = () => {
  const { socialLinks, sacPhone } = usePage<{
    socialLinks: { name: 'instagram' | 'facebook' | 'linkedin' | 'youtube'; link: string }[];
    sacPhone: string;
  }>().props;

  const imgPath = '/illust';

  return (
    <footer className="flex w-full flex-col items-center bg-linear-to-r from-petroplus-orange from-10% to-[#FD5B1D] px-6 py-12 font-sans text-white">
      <div className="mx-auto w-[90%]">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between lg:items-center">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <img
              src={`/petroplus-branca.svg`}
              alt="Petroplus Logo"
              className="h-10 brightness-0 invert"
            />
            <nav className="flex flex-col items-center gap-2 text-[10px] font-medium md:items-start lg:text-base">
              <div className="flex items-center gap-3">
                <a href="/" className="hover:opacity-80">
                  Home
                </a>
                <span className="font-thin">|</span>
                <a href="/sobre" className="hover:opacity-80">
                  A Petroplus
                </a>
                <span className="font-thin">|</span>
                <a href="/marcas" className="hover:opacity-80">
                  Nossas Marcas
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a href="/produtos" className="hover:opacity-80">
                  Produtos
                </a>
                <span className="font-thin">|</span>
                <a
                  href="https://petroplus.vagas.solides.com.br/"
                  className="hover:opacity-80"
                >
                  Trabalhe Conosco
                </a>
                <span className="font-thin">|</span>
                <a href="/contato" className="hover:opacity-80">
                  Dúvidas Frequentes
                </a>
              </div>
            </nav>
            <div className="flex items-center gap-2 text-[8px] font-bold lg:text-base">
              <span className="opacity-90">SAC:</span> {sacPhone}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 md:gap-4">
            <img
              src={`${imgPath}/ecovadis.png`}
              alt="Ecovadis"
              className="max-h-10 object-contain md:max-h-20"
            />
            <img
              src={`${imgPath}/eureciclo.png`}
              alt="Eu Reciclo"
              className="max-h-10 object-contain md:max-h-20"
            />
            <img
              src={`${imgPath}/cdp-2025.png`}
              alt="CDP 2025"
              className="max-h-10 object-contain md:max-h-20"
            />
            <img
              src={`${imgPath}/selos-iso.png`}
              alt="ISO 9001 14001"
              className="max-h-10 object-contain md:max-h-20"
            />
            <img
              src={`${imgPath}/selo-seguranca.png`}
              alt="Segurança Inmetro"
              className="max-h-10 object-contain md:max-h-20"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 md:hidden md:justify-start">
          <SocialIcons icons={socialLinks} iconsSize={16} className="gap-2" />
        </div>
      </div>

      <div className="rl mt-8 w-[90%] border-t border-white/20 pt-6 text-center text-[10px] lg:flex lg:justify-center lg:gap-10 lg:text-base">
        <div className="hidden items-center justify-center gap-2 md:justify-start lg:flex">
          <SocialIcons icons={socialLinks} iconsSize={16} className="gap-2" />
        </div>
        <p className="flex flex-wrap justify-center gap-2">
          <span>© 2026 | STP/Petroplus Brasil - </span>
          <a href="/aviso-de-privacidade" className="underline hover:text-gray-200">
            Aviso de privacidade
          </a>
          <span>|</span>
          <a href="/politica-sgi" className="underline hover:text-gray-200">
            Política de Sistema de Gestão Integrado
          </a>
          <span>|</span>
          <a href="#" className="underline hover:text-gray-200">
            Relatório de Transparência Salarial
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
