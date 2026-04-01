import SiteLayout from '@/layouts/site-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Head } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, fadeRightVariant, fadeLeftVariant } from '@/lib/animations';

const contatoSchema = z.object({
  nome: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
  email: z.string().email('Informe um e-mail válido.'),
  telefone: z
    .string()
    .min(10, 'Informe um telefone válido.')
    .regex(/^[\d\s()+-]+$/, 'O telefone deve conter apenas números.'),
  mensagem: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres.'),
});

type ContatoFormValues = z.infer<typeof contatoSchema>;

export default function Page() {
  const form = useForm<ContatoFormValues>({
    resolver: zodResolver(contatoSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    },
  });

  function onSubmit(data: ContatoFormValues) {
    console.log(data);
  }

  return (
    <SiteLayout>
      <Head title="CONTATO">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      <section className="relative flex flex-col items-center justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/contato-banner.png"
          alt="Contato Banner"
          className="w-full object-cover md:h-[350px]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 mx-auto flex w-[80%] max-w-xs items-center justify-center md:max-w-none"
        >
          <h1 className="text-xl font-bold text-white md:text-4xl text-center">
            FALE COM A <br />
            PETROPLUS
          </h1>
        </motion.div>
      </section>

      <section className="bg-white py-12 md:py-16 overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto flex w-[80%] max-w-4xl flex-col gap-2"
        >
          <motion.div variants={fadeUpVariant}>
            <h2 className="text-xs text-petroplus-orange md:text-sm">
              ENTRE EM CONTATO CONOSCO
            </h2>
            <h2 className="font-bold text-black md:text-2xl">
              ESTAMOS PRONTOS PARA <br className="md:hidden" />
              ATENDER VOCÊ!
            </h2>
          </motion.div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 flex flex-col gap-4"
            >
              <motion.div variants={fadeUpVariant}>
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="*Seu nome"
                          className="rounded-lg border border-petroplus-gray-300 px-4 py-3 text-xs text-gray-700 outline-none focus:border-petroplus-orange md:py-4 md:text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="*Seu e-mail"
                          className="rounded-lg border border-petroplus-gray-300 px-4 py-3 text-xs text-gray-700 outline-none focus:border-petroplus-orange md:py-4 md:text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="*Seu telefone"
                          className="rounded-lg border border-petroplus-gray-300 px-4 py-3 text-xs text-gray-700 outline-none focus:border-petroplus-orange md:py-4 md:text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="*Digite aqui sua mensagem"
                          rows={5}
                          className="resize-none rounded-lg border border-petroplus-gray-300 px-4 py-3 text-xs text-gray-700 outline-none focus:border-petroplus-orange md:py-4 md:text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <Button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  asChild
                >
                  <button type="submit" className="h-fit rounded-full bg-petroplus-orange px-8 py-2 text-xs font-bold text-white hover:bg-orange-600 md:px-12 md:py-3 md:text-sm">
                    ENVIAR
                  </button>
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </section>

      <section className="bg-white overflow-hidden">
        <div className="mx-auto flex w-[80%] max-w-6xl flex-col gap-6 pb-8 md:flex-row md:gap-8">
          {/* Escritório */}
          <motion.div 
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-1 flex-col gap-2"
          >
            <div>
              <h2 className="text-xs font-bold text-petroplus-orange md:text-sm">
                ESCRITÓRIO
              </h2>
              <p className="text-xs text-petroplus-gray-700 md:text-sm">
                R. Iguatemi, 448 - Itaim Bibi, São Paulo - SP,
                <br />
                CEP 01453-100
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7564783.922473965!2d-44.013451596875!3d-22.211903415187976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57137e3b0869%3A0xb23d6afe54aaaa51!2sPetroplus%20Produtos%20Automotivos!5e0!3m2!1spt-BR!2sbr!4v1773881569243!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </motion.div>

          {/* Fábrica */}
          <motion.div 
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-1 flex-col gap-2"
          >
            <div>
              <h2 className="text-xs font-bold text-petroplus-orange md:text-sm">FÁBRICA</h2>
              <p className="text-xs text-petroplus-gray-700 md:text-sm">
                Av. Jamil Nahas, 741 - Polo Industrial Oeste,
                <br />
                Campo Grande - MS, CEP 79108-680
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7564783.922473965!2d-44.013451596875!3d-22.211903415187976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e1197371f749%3A0x2d998a0496af3d4c!2sSTP%20Petroplus%20Sul%20Com%C3%A9rcio%20Exterior!5e0!3m2!1spt-BR!2sbr!4v1773883051402!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
