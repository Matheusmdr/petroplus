import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { Variants } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import SocialIcons from './social-icons';
import { usePage } from '@inertiajs/react';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'A Petroplus', href: '/sobre' },
  { name: 'Nossas Marcas', href: '/marcas' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Pacote de Valor', href: '/pacote-de-valor' },
  { name: 'Soluções Tecnológicas', href: '/petroplay' },
  { name: 'Trabalhe Conosco', href: 'https://petroplus.vagas.solides.com.br/' },
  { name: 'Contato', href: '/contato' },
];

function Navbar() {
  const { socialLinks } = usePage<{
    socialLinks: {
      name: 'instagram' | 'facebook' | 'linkedin' | 'youtube';
      link: string;
    }[];
  }>().props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuVariants: Variants = {
    closed: {
      x: '100%',
      transition: { type: 'tween', duration: 0.3, when: 'afterChildren' },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav className="lg:animate-gradient relative z-50 w-full bg-white shadow-sm lg:bg-gradient-to-r lg:from-petroplus-orange lg:via-[#FD5B1D] lg:to-petroplus-orange lg:bg-[length:200%_auto] lg:shadow-none">
      <div className="mx-auto flex items-center justify-between px-4 py-4 lg:w-[85%]">
        <a href="/" className="block">
          <img
            src="/petroplus-laranja.svg"
            alt="Petroplus Logo"
            className="h-10 w-auto object-contain lg:hidden"
          />
          <img
            src="/petroplus-branca.svg"
            alt="Petroplus Logo"
            className="hidden h-10 w-auto object-contain lg:block"
          />
        </a>

        <ul className="hidden gap-6 text-[11px] font-semibold text-white uppercase lg:flex lg:text-base lg:font-medium lg:normal-case">
          {menuItems.slice(0, 6).map((item, index) => (
            <li key={item.name} className="flex items-center gap-6">
              <a
                href={item.href}
                className="cursor-pointer transition-colors hover:text-white/80"
              >
                {item.name}
              </a>
              {index < 5 && <span className="text-white/50">|</span>}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <svg viewBox="0 0 640 448" className="h-5 w-auto rounded-sm shadow-sm">
            <rect fill="#009b3a" width="640" height="448" />
            <polygon fill="#fedf00" points="320,34 606,224 320,414 34,224" />
            <circle fill="#002776" cx="320" cy="224" r="92" />
            <path fill="#fff" d="M239,252 Q280,210 400,240 Q390,248 245,260 Z" />
          </svg>
          <span className="text-xs font-semibold text-white">BR ▾</span>
        </div>

        <button
          className="text-gray-800 lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={30} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-orange-500 lg:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex h-full flex-col p-6">
              <div className="mb-12 flex items-center justify-between">
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={35} strokeWidth={1.5} />
                </button>
                <img
                  src="/petroplus-branca.svg"
                  alt="Petroplus Logo"
                  className="h-10 w-auto object-contain"
                />
                <div className="w-8.75" />
              </div>

              <ul className="flex flex-1 flex-col items-center">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    className="w-full text-center"
                    variants={itemVariants}
                  >
                    <a
                      href={item.href}
                      className="inline-block py-4 text-lg font-medium tracking-wide text-white uppercase"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                    {index < menuItems.length - 1 && (
                      <div className="mx-auto h-px w-48 bg-white/20" />
                    )}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="flex justify-center pb-10"
                variants={itemVariants}
              >
                <SocialIcons icons={socialLinks} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
