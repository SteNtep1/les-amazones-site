import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { HeartHandshake, Users, Sparkles, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full border">
              <Image
                src="/logo.jpeg"
                alt="LES AMAZONES"
                width={80}
                height={80}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <div className="font-semibold">LES AMAZONES</div>
              <div className="text-xs text-zinc-600">
                Association • Insertion & autonomie
              </div>
            </div>
          </div>

          <a
            href="#adherer"
            className="rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
          >
            Adhérer
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl font-bold md:text-5xl">
          Accompagner les femmes et leurs enfants{" "}
          <span className="text-orange-600">vers l’autonomie</span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-zinc-700">
          LES AMAZONES organise des actions culturelles, artistiques et
          éducatives, et met en place des dispositifs de formation,
          d’accompagnement, de soutien social et professionnel.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#adherer"
            className="rounded-full bg-orange-600 px-6 py-3 text-white hover:bg-orange-700"
          >
            Rejoindre l’association
          </a>
          <a
            href="#contact"
            className="rounded-full border px-6 py-3 hover:bg-zinc-50"
          >
            Nous contacter
          </a>
        </div>
      </section>

      {/* Adhérer Section */}
      <section id="adherer" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Adhérer</h2>
            <p className="mt-2 text-zinc-700">
              Remplissez le formulaire pour rejoindre l’association.
            </p>

            <form
              action="https://formspree.io/f/xreaakka"
              method="POST"
              className="mt-6 grid gap-4 md:grid-cols-2"
            >
              {/* Email subject */}
              <input
                type="hidden"
                name="_subject"
                value="Nouvelle demande d’adhésion — LES AMAZONES"
              />

              <Input
                label="Nom complet"
                placeholder="Votre nom"
                name="Nom complet"
              />

              <Input
                label="Email"
                placeholder="vous@email.com"
                type="email"
                name="Email"
              />

              <Input
                label="Téléphone"
                placeholder="+33 ..."
                name="Téléphone"
              />

              <Input
                label="Ville"
                placeholder="Votre ville"
                name="Ville"
              />

              <div className="md:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="Message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-orange-600"
                  placeholder="Pourquoi souhaitez-vous adhérer ?"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Contact</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Mail size={18} />
                Email
              </div>
              <p className="mt-2 text-sm text-zinc-700">
                Ajouter l’email officiel ici.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 font-semibold">
                <MapPin size={18} />
                Adresse
              </div>
              <p className="mt-2 text-sm text-zinc-700">
                Ajouter l’adresse du siège social.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
          © {new Date().getFullYear()} LES AMAZONES — Tous droits réservés
        </div>
      </footer>
    </main>
  );
}

/* Reusable Input */
function Input({
  label,
  placeholder,
  name,
  type = "text",
}: {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={name === "Email" || name === "Nom complet"}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-orange-600"
      />
    </div>
  );
}