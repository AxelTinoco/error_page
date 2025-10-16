import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen p-8 bg-gradient-to-b from-white to-gray-50">
      <main className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Aviso importante
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed max-w-xl">
          Nuestra plataforma se encuentra temporalmente en mantenimiento.
        </p>

        <p className="text-sm sm:text-base text-gray-500 mb-12 max-w-xl">
          Si tienes una asesoría de salud agendada, no te preocupes: nuestro equipo de salud te contactará por teléfono para brindarte la atención en el horario programado.
        </p>
        <p className="text-sm sm:text-base text-gray-500 mb-12 max-w-xl">
          Estaremos de vuelta muy pronto. <br></br>
          Gracias por tu comprensión y confianza.
        </p>

        <div className="mb-12">
          <Image
            src="/logo_dxkre.png"
            alt="Diagnostikare Logo"
            width={100}
            height={46}
            priority
            className="mx-auto"
          />
        </div>


        {/* Support Button */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="mailto:soporte@diagnostikare.com"
            className="inline-flex items-center justify-center px-4 py-4 text-sm font-semibold text-white bg-[#003b1f] rounded-lg hover:bg-[#003b1f] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all w-full sm:w-64"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contactar soporte
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=525568269992"
            className="inline-flex items-center justify-center px-4 py-4 text-sm font-semibold text-[#003b1f] bg-white border-2 border-[#003b1f] rounded-lg hover:bg-blue-50 transition-colors duration-200 w-full sm:w-64"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Exclusivo de WhatsApp™
          </a>
        </div>

        {/* Additional info */}
        <div className="mt-16 pt-8 border-t border-gray-200 w-full max-w-xl">
          <p className="text-sm text-gray-500">
            ¿Necesitas ayuda urgente? Nuestro equipo de soporte estára disponible.
          </p>
        </div>
      </main>
    </div>
  );
}
