import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/lib/animations';

export default function Page() {
  return (
    <SiteLayout>
      <Head title="Aviso de Privacidade">
        <meta head-key="description" name="description" content="Aviso de Privacidade da Petroplus. Saiba como coletamos e tratamos seus dados pessoais em conformidade com as leis vigentes." />
      </Head>
      <section className="relative flex flex-col items-center justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/sobre-banner.png"
          alt="Banner Aviso de Privacidade"
          className="w-full object-cover md:hidden md:max-h-112.5"
        />
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/illust/sobre-banner-desktop.png"
          alt="Banner Aviso de Privacidade"
          className="hidden w-full object-cover md:max-h-112.5 lg:block"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 mx-auto flex w-[80%] max-w-xs items-center justify-center md:max-w-none"
        >
          <h1 className="text-center text-xl font-bold uppercase text-white lg:text-5xl">
            Aviso de<br className="md:hidden" /> Privacidade
          </h1>
        </motion.div>
      </section>

      <section className="overflow-hidden bg-white py-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
          className="mx-auto flex w-[90%] max-w-4xl flex-col font-sans text-gray-800 md:w-[85%]"
        >
          <div className="space-y-6">

          <div className="space-y-4">
            <p className="text-lg font-bold text-[#182951]">
              I. COMPROMISSO DA PETROPLUS COM A PRIVACIDADE E PROTEÇÃO DE DADOS
              PESSOAIS
            </p>
            <p className="text-justify leading-relaxed">
              A PETROPLUS SUL COMÉRCIO EXTERIOR LTDA. (“PETROPLUS”) considera a
              privacidade e a proteção de dados do USUÁRIO e/ou VISITANTE
              (“USUÁRIOS”) de seu SITE e/ou APLICATIVO acessível através do
              endereço eletrônico{' '}
              <a
                href="https://petroplus.com.br/"
                className="text-blue-600 hover:underline"
              >
                https://petroplus.com.br/
              </a>{' '}
              (“SITE e/ou APLICATIVO”) um assunto de grande importância!
            </p>
            <p className="text-justify leading-relaxed">
              Em razão disso, a PETROPLUS elaborou o seguinte AVISO DE
              PRIVACIDADE, a fim de informar claramente ao USUÁRIO do SITE e/ou
              APLICATIVO, de que modo são tratados dados pessoais por estes
              fornecidos quando do acesso ao SITE e/ou utilização de serviços
              eletrônicos disponíveis.
            </p>
            <p className="text-justify leading-relaxed">
              Recomendamos a todos os USUÁRIOS do SITE e/ou APLICATIVO, uma
              leitura atenta e cuidadosa deste AVISO DE PRIVACIDADE,
              disponibilizando, desde já, o seguinte contato para
              esclarecimentos de dúvida, porventura existentes:{' '}
              <a
                href="mailto:adriane.rezende@petroplus.com.br"
                className="text-blue-600 hover:underline"
              >
                adriane.rezende@petroplus.com.br
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <p className="mt-8 text-lg font-bold text-[#182951]">
              II. NORMAS LEGAIS APLICÁVEIS À PRIVACIDADE E PROTEÇÃO DE DADOS
            </p>
            <p className="text-justify leading-relaxed">
              A privacidade e proteção de dados pessoais no Brasil é regulada
              através das disposições contidas na Lei Geral de Proteção de Dados
              – Lei 13.709/2018 (“LGPD”), na Lei nº 8.078/90 (“Código de Defesa
              do Consumidor”) quando o uso dos dados decorrer de relações de
              consumo, na Lei nº 12.965/14 (“Marco Civil da Internet”), bem como
              na Constituição Federal da República Federativa do Brasil de 1988
              (“Constituição Federal”).
            </p>
            <p className="text-justify leading-relaxed">
              A PETROPLUS declara que respeita e observa toda a legislação
              aplicável a privacidade e proteção de dados acima relacionada em
              relação a todo e quaisquer dados pessoais que utilizar no âmbito e
              em razão de suas atividades.
            </p>
          </div>

          <div className="space-y-4">
            <p className="mt-8 text-lg font-bold text-[#182951]">
              III. O QUE SÃO DADOS PESSOAIS?
            </p>
            <p className="text-justify leading-relaxed">
              De acordo com a LGPD, são considerados dados pessoais todas e
              quaisquer informações que, isoladas ou associadas a outras,
              identifiquem ou permitam a identificação de uma determinada pessoa
              natural.
            </p>
            <p className="text-justify leading-relaxed">
              A LGPD ainda define ‘dados pessoais sensíveis’ como sendo aqueles
              sobre origem racial ou étnica, convicção religiosa, opinião
              política, filiação a sindicato ou a organização de caráter
              religioso, filosófico ou político, dado referente à saúde ou à
              vida sexual, dado genético ou biométrico, quando vinculado a uma
              pessoa natural.
            </p>
            <p className="text-justify leading-relaxed">
              A PETROPLUS poderá coletar e utilizar alguns dados pessoais dos
              USUÁRIOS quando de sua visita ao SITE e/ou APLICATIVO, para as
              finalidades abaixo descritas, em estrita conformidade com a
              legislação aplicável a privacidade e proteção de dados. Caso
              prefira, o USUÁRIO poderá visitar o SITE e/ou APLICATIVO da
              PETROPLUS de forma anônima, conforme assim seja configurado seu
              navegador (vide item VI abaixo).
            </p>
          </div>

          <div className="space-y-4">
            <p className="mt-8 text-lg font-bold text-[#182951]">
              IV. QUAIS DADOS PESSOAIS SÃO COLETADOS E PARA QUAIS FINALIDADES?
            </p>
            <p className="text-justify leading-relaxed">
              A PETROPLUS informa que poderá coletar alguns dados pessoais dos
              USUÁRIOS do SITE e/ou APLICATIVO, os quais serão utilizados para
              as seguintes finalidades:
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 p-3 text-center font-bold text-[#182951]">
                      Tipos de Dados Pessoais coletados
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-bold text-[#182951]">
                      Finalidade do tratamento de dados pessoais
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-bold text-[#182951]">
                      Fonte de coleta dos dados e período de utilização
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 align-top">
                      <ul className="list-disc pl-5 text-[#182951]">
                        <li>CEP do titular</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 p-4 align-top text-[#182951]">
                      Encontrar o distribuidor mais próximo do endereço do
                      titular dos dados
                    </td>
                    <td className="border border-gray-300 p-4 text-justify align-top text-[#182951]">
                      Para esta finalidade, os dados são fornecidos
                      voluntariamente pelo USUÁRIO através do preenchimento de
                      uma lacuna disponível no link: <br />
                      <a
                        href="https://petroplus.com.br/distribuidores/"
                        className="break-all text-blue-600 hover:underline"
                      >
                        https://petroplus.com.br/distribuidores/
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 align-top">
                      <ul className="list-disc pl-5 text-[#182951]">
                        <li>Login</li>
                        <li>Senha</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 p-4 text-justify align-top text-[#182951]">
                      Acesso ao sistema EXTRANET pela PETROPLUS pelos
                      colaboradores por meio de link: <br />
                      <a
                        href="https://petroplus.extranet.com.br/index.php"
                        className="break-all text-blue-600 hover:underline"
                      >
                        https://petroplus.extranet.com.br/index.php
                      </a>
                    </td>
                    <td className="border border-gray-300 p-4 text-justify align-top text-[#182951]">
                      Para esta finalidade, os dados são fornecidos pelo USUÁRIO
                      através do cadastramento prévio pela PETROPLUS ao sistema.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 align-top">
                      <ul className="list-disc pl-5 text-[#182951]">
                        <li>Nome</li>
                        <li>E-mail</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 p-4 text-justify align-top text-[#182951]">
                      Entrar em contato com a PETROPLUS sobre possíveis dúvidas
                    </td>
                    <td className="border border-gray-300 p-4 text-justify align-top text-[#182951]">
                      Para esta finalidade, os dados são fornecidos
                      voluntariamente pelo USUÁRIO através do preenchimento de
                      uma lacuna disponível no link: <br />
                      <a
                        href="https://petroplus.com.br/contato/"
                        className="break-all text-blue-600 hover:underline"
                      >
                        https://petroplus.com.br/contato/
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="border-l-4 border-[#182951] bg-gray-50 p-4 text-justify leading-relaxed">
              <strong>ATENÇÃO:</strong> Não haverá coleta, processamento,
              armazenamento ou utilização dos dados pessoais do USUÁRIO de forma
              diversa ou para outros fins que não aqueles explicitados mais
              adiante neste Aviso de Privacidade.
            </p>
          </div>

          <div className="space-y-4">
            <p className="mt-8 text-lg font-bold text-[#182951]">
              V. TRATAMENTO DE DADOS DE CRIANÇAS E ADOLESCENTES
            </p>
            <p className="text-justify leading-relaxed">
              A utilização de dados pessoais de crianças e/ou adolescentes será
              realizada no melhor interesse dos mesmos em conformidade com o
              disposto na LGPD, mediante o consentimento específico e em
              destaque dado por pelo menos um dos pais ou responsável legal,
              exceto nos casos em que os dados do menor sejam utilizados para o
              contato da PETROPLUS com os pais ou responsável legal ou para sua
              proteção, sendo que em nenhum caso serão repassados a terceiros.
            </p>
          </div>

          <div className="space-y-4">
            <p className="mt-8 text-lg font-bold text-[#182951]">
              VI. USO DE COOKIES
            </p>
            <p className="font-semibold text-gray-700">a) O QUE SÃO COOKIES</p>
            <p className="text-justify leading-relaxed">
              Os cookies são arquivos de texto com pequenas quantidades de
              informações que são descarregados para o seu dispositivo por meio
              de sites, aplicativos, mídias digitais e anúncios. Os cookies são
              úteis porque permitem que um site reconheça o dispositivo de um
              usuário quando ele acessar determinada página novamente.
            </p>
            <p className="text-justify leading-relaxed">
              Os cookies poderão guardar, de forma duradoura, um arquivo no seu
              computador. Este arquivo poderá ser utilizado para personalizar
              nosso site com base nas suas escolhas e interesses de navegações
              anteriores.
            </p>

            <p className="mt-4 font-semibold text-gray-700">
              b) QUAIS COOKIES SÃO UTILIZADOS NO SITE
            </p>
            <p className="text-justify leading-relaxed">
              A PETROPLUS utiliza as seguintes categorias de cookies:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-justify">
              <li>
                <strong>Cookies Necessários:</strong> são os cookies necessários
                para que o SITE trabalhe normalmente.
              </li>
              <li>
                <strong>Cookies de Desempenho:</strong> são os cookies que
                permitem a PETROPLUS gerir o número de visitas do USUÁRIO ao
                SITE e avaliar a necessidade de eventuais melhorias. Estes
                cookies permitem, ainda, identificar quais páginas do SITE são
                mais e menos populares a fim de compreender de que maneira os
                USUÁRIOS navegam pelo SITE.
              </li>
              <li>
                <strong>Cookies de funcionalidade:</strong> são os cookies que
                memorizam suas preferências e escolhas enquanto navega pelo
                SITE.
              </li>
              <li>
                <strong>Cookies de Publicidade:</strong> são cookies que a
                PETROPLUS utiliza para direcionar anúncios para o USUÁRIO de
                acordo com os seus interesses.
              </li>
            </ul>

            <p className="mt-4 leading-relaxed">
              Os cookies utilizados no SITE são:
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 p-3 text-center font-bold text-[#182951]">
                      Nome do cookie
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-bold text-[#182951]">
                      Definição do cookie
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-bold text-[#182951]">
                      Finalidade
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-bold text-[#182951]">
                      Tempo de retenção
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 text-center text-[#182951]">
                      Slimstat_tracking_code
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-[#182951]">
                      Funcionalidade
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-[#182951]">
                      Este cookie é analisar como o site está funcionando.
                      Coleta informações sobre como o usuário chegou à página,
                      qual o endereço do IP, entre outras
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-[#182951]">
                      30min
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 font-semibold text-gray-700">
              CONFIGURAÇÕES DE COOKIES
            </p>
            <p className="text-justify leading-relaxed">
              Ao visitar o SITE e/ou APLICATIVO pela primeira vez, o USUÁRIO
              será questionado sobre a possibilidade de acessar as suas
              configurações de cookies.
            </p>
            <p className="text-justify leading-relaxed">
              Ao navegar no SITE e/ou APLICATIVO, o USUÁRIO receberá uma
              quantidade mínima de cookies corresponde aos cookies necessários,
              exceto se houver alterado as configurações de seu navegador a fim
              de informar ou bloquear automaticamente o armazenamento de cookies
              no seu dispositivo de acesso.
            </p>
            <p className="text-justify leading-relaxed">
              Os cookies que forem armazenados anteriormente poderão ser
              deletados através do navegador, conforme instruções encontradas
              nas páginas de suporte do navegador.
            </p>
            <p className="text-justify leading-relaxed">
              O USUÁRIO poderá definir suas configurações clicando no botão
              “CONFIGURAÇÕES DE COOKIES”, selecionando, em seguida, suas
              preferências, sendo certo que os Cookies Necessários serão sempre
              obrigatórios para o funcionamento do SITE e/ou APLICATIVO. Caso
              opte por aceitar todos os cookies utilizados no SITE e/ou
              APLICATIVO, bastará ao USUÁRIO clicar no botão “ACEITO”.
            </p>
          </div>

          <div className="space-y-4">
            <p className="mt-8 text-lg font-bold text-[#182951]">
              VII. RETENÇÃO E ARMAZENAMENTO DOS DADOS PESSOAIS
            </p>
            <p className="text-justify leading-relaxed">
              A PETROPLUS manterá os dados e informações pessoais do USUÁRIO
              pelo período necessário ao tratamento de dados, ressalvado o caso
              de revogação do consentimento do titular, conforme direitos do
              USUÁRIO posteriormente especificados, ou ainda por determinação da
              Autoridade Nacional de Proteção de Dados – ANPD, conforme
              legislação aplicável.
            </p>
            <p className="text-justify leading-relaxed">
              O armazenamento dos dados é feito de forma segura, mediante a
              adoção de todas as medidas legais previstas na Lei Geral de
              Proteção de Dados e suas futuras regulamentações, garantindo a
              proteção e privacidade dos seus dados pessoais, contra acessos não
              autorizados, situações acidentais ou ilícitas de destruição,
              perda, alteração, comunicação ou qualquer forma de tratamento
              inadequado ou ilícito.
            </p>
            <p className="text-justify leading-relaxed">
              Além disso, a PETROPLUS poderá conservar os dados e/ou informações
              pessoais dos USUÁRIOS para: (a) cumprimento de obrigação legal ou
              regulatória; (b) transferência a terceiro, desde que observados
              eventuais requisitos de tratamento de dados estabelecidos pela
              legislação aplicável; (c) uso exclusivo do controlador, vedado seu
              acesso por terceiro, e desde que anonimizados os dados; (d) outras
              hipóteses previstas na legislação aplicável, conforme o caso.
            </p>
          </div>

          <div className="space-y-4">
            <p className="mt-8 text-lg font-bold text-[#182951]">
              VIII. TRANSFERÊNCIA E/OU COMPARTILHAMENTO DE DADOS PESSOAIS
            </p>
            <p className="text-justify leading-relaxed">
              A PETROPLUS declara que não comercializa quaisquer dados e/ou
              informações pessoais do USUÁRIO.
            </p>
            <p className="text-justify leading-relaxed">
              Os dados pessoais utilizados pela PETROPLUS poderão ser,
              eventualmente, transferidos e/ou compartilhados, para fins e nos
              limites definidos no presente AVISO DE PRIVACIDADE para: (i)
              empresas parceiras e/ou contratadas para prestação de serviços
              específicos, na condição de operador de dados pessoais, na forma
              da Lei Geral de Proteção de Dados; (ii) autoridade competente
              mediante ordem judicial; (iii) empresas provedoras da
              infraestrutura tecnológica e operacional, para fins de prover os
              serviços oferecidos pela PETROPLUS; e, (iv) empresas prestadoras
              de serviço, para fins exclusivos de prover os serviços oferecidos
              pela PETROPLUS com qualidade.
            </p>
          </div>

          <div className="space-y-4">
            <p className="mt-8 text-lg font-bold text-[#182951]">
              IX. DIREITOS DO USUÁRIO DO SITE
            </p>
            <p className="text-justify leading-relaxed">
              O USUÁRIO terá, dentre outros previstos na legislação aplicável,
              os seguintes direitos, em razão do uso do SITE e/ou APLICATIVO,
              mediante requisição e regular identificação:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-justify">
              <li>
                Confirmação quanto a existência de tratamento de dados pessoais
                de sua exclusiva titularidade, que estejam sob a posse e/ou
                forem tratados pela PETROPLUS;
              </li>
              <li>
                Acesso aos dados pessoais, mediante a emissão de um extrato
                contendo todos os dados pessoais tratados pela PETROPLUS, que
                será enviado para o e-mail registrado nos sistemas ou ainda, em
                formato impresso, se assim o preferir, em nosso endereço
                administrativo;
              </li>
              <li>
                Correção de dados e/ou informações pessoais que estejam
                desatualizados, incompletos ou inexatos;
              </li>
              <li>
                Eliminação, bloqueio e anonimização de dados pessoais quando
                desnecessários, excessivos e/ou tratados em desconformidade com
                o disposto no presente AVISO DE PRIVACIDADE e/ou na legislação
                vigente. O USUÁRIO poderá, ainda, solicitar a eliminação de
                dados pessoais tratados mediante seu consentimento;
              </li>
              <li>
                Portabilidade dos dados pessoais, para outro fornecedor de
                produtos e/ou serviços, conforme a regulamentação de tal direito
                pela Autoridade Nacional de Proteção de Dados e observados os
                eventuais segredos comerciais da PETROPLUS;
              </li>
              <li>
                Informação sobre o compartilhamento de dados pessoais pela
                PETROPLUS, para quaisquer empresas, sejam públicas e/ou
                privadas;
              </li>
              <li>
                Revogação de consentimento, conforme seja o caso, na forma
                prevista neste AVISO DE PRIVACIDADE, bem como na legislação
                vigente, a qualquer tempo e gratuitamente. Os tratamentos dos
                dados pessoais realizados anteriormente à solicitação de
                revogação do consentimento, serão considerados válidos para
                todos os efeitos e fins de direito. O USUÁRIO terá ainda o
                direito de, nos tratamentos em que forem solicitados o seu
                consentimento prévio, ser informado sobre as consequências
                negativas caso o consentimento não seja fornecido.
              </li>
            </ul>

            <p className="mt-4 text-justify leading-relaxed">
              O USUÁRIO poderá exercer quaisquer dos seus direitos estabelecidos
              acima e/ou na legislação vigente, mediante manifestação e/ou
              solicitação através do e-mail:{' '}
              <a
                href="mailto:dpo@petroplus.com.br"
                className="text-blue-600 hover:underline"
              >
                dpo@petroplus.com.br
              </a>
            </p>

            <p className="mt-6 font-semibold text-gray-700">
              MODIFICAÇÕES DESTE AVISO DE PRIVACIDADE
            </p>
            <p className="text-justify leading-relaxed">
              A PETROPLUS informa que o presente AVISO DE PRIVACIDADE poderá ser
              alterado a qualquer momento, conforme novidades legislativas e/ou
              mudanças de suas atividades, sendo certo que na ocorrência desta
              hipótese, os USUÁRIOS do SITE e/ou APLICATIVO serão devidamente e
              previamente comunicados.
            </p>
          </div>

          <div className="space-y-4">
            <p className="mt-8 text-lg font-bold text-[#182951]">
              X. ENCARREGADO DE PROTEÇÃO DE DADOS
            </p>
            <p className="text-justify leading-relaxed">
              Em quaisquer casos de dúvidas e/ou informações adicionais sobre o
              tratamento dos dados pessoais pela PETROPLUS e/ou disposições
              contidas neste AVISO DE PRIVACIDADE, entre em contato através dos
              canais abaixo:
            </p>
            <div className="mt-2 inline-block rounded-md bg-gray-50 p-4">
              <p className="leading-relaxed">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:dpo@petroplus.com.br"
                  className="text-blue-600 hover:underline"
                >
                  dpo@petroplus.com.br
                </a>
              </p>
              <p className="leading-relaxed">
                <strong>Escritório:</strong> Emerenciano, Baggio e Associados –
                Advogados
                <br />
                <strong>Telefone:</strong> (19) 2102-7638
              </p>
            </div>
            <p className="mt-8 text-right text-sm text-gray-500 italic">
              Campo Grande/MS, maio de 2023.
            </p>
          </div>
        </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
