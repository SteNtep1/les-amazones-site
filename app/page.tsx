import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { HeartHandshake, Users, Sparkles, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top bar */}
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
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">LES AMAZONES</div>
              <div className="text-xs text-zinc-600">
                Association • Insertion & autonomie
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#mission" className="text-zinc-700 hover:text-zinc-950">
              Mission
            </a>
            <a href="#actions" className="text-zinc-700 hover:text-zinc-950">
              Actions
            </a>
            <a href="#equipe" className="text-zinc-700 hover:text-zinc-950">
              Équipe
            </a>
            <a href="#contact" className="text-zinc-700 hover:text-zinc-950">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#adherer"
              className="rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
            >
              Adhérer
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-200 blur-3xl" />
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-emerald-200 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-zinc-700">
              <Sparkles size={14} />
              Valoriser l’insertion & l’intégration
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Accompagner les femmes et leurs enfants{" "}
              <span className="text-orange-600">vers l’autonomie</span>
            </h1>

            <p className="mt-4 text-lg text-zinc-700">
              LES AMAZONES organise des actions culturelles, artistiques et
              éducatives, et met en place des dispositifs de formation,
              d’accompagnement, de soutien social et professionnel.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#adherer"
                className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700"
              >
                Rejoindre l’association
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Nous contacter
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Créée le 05 juin 2025 à Nogent-l’Artaud (France).
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border bg-white p-5 shadow-sm">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border bg-zinc-50">
                <Image
                  src="/logo.jpeg"
                  alt="Logo LES AMAZONES"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-contain p-4"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-emerald-50 p-3">
                  <div className="text-xl font-bold text-emerald-800">3</div>
                  <div className="text-xs text-emerald-800/80">Piliers</div>
                </div>
                <div className="rounded-2xl bg-orange-50 p-3">
                  <div className="text-xl font-bold text-orange-800">2025</div>
                  <div className="text-xs text-orange-800/80">Création</div>
                </div>
                <div className="rounded-2xl bg-zinc-100 p-3">
                  <div className="text-xl font-bold">FR</div>
                  <div className="text-xs text-zinc-700">Implantation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Notre mission</h2>
          <p className="mt-2 max-w-3xl text-zinc-700">
            Valoriser l’insertion et l’intégration des femmes et de leurs enfants
            vers l’autonomie socio-économique.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card
              icon={<Users />}
              title="Insertion & intégration"
              text="Aider à trouver sa place, accéder aux droits, créer des liens et gagner en stabilité."
            />
            <Card
              icon={<Sparkles />}
              title="Culture & éducation"
              text="Actions culturelles, artistiques et éducatives pour développer la confiance et les compétences."
            />
            <Card
              icon={<HeartHandshake />}
              title="Soutien & accompagnement"
              text="Formation, accompagnement, soutien social et professionnel pour renforcer l’autonomie."
            />
          </div>
        </div>
      </section>

      {/* Actions */}
      <section id="actions" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Nos actions</h2>
          <p className="mt-2 max-w-3xl text-zinc-700">
            Exemples de programmes que le site pourra présenter (à ajuster selon
            vos activités réelles).
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <ListCard
              title="Ateliers & formations"
              items={[
                "Ateliers CV / recherche d’emploi",
                "Initiation numérique",
                "Gestion budgétaire & autonomie",
              ]}
            />
            <ListCard
              title="Accompagnement"
              items={[
                "Soutien social",
                "Soutien professionnel",
                "Orientation et suivi personnalisé",
              ]}
            />
            <ListCard
              title="Culture & communauté"
              items={[
                "Activités culturelles",
                "Sorties et évènements",
                "Actions artistiques",
              ]}
            />
            <ListCard
              title="Enfants & famille"
              items={[
                "Activités éducatives",
                "Soutien à la parentalité",
                "Espaces d’échange",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">L’équipe</h2>
          <p className="mt-2 max-w-3xl text-zinc-700">
            Bureau élu lors de l’assemblée constitutive du 05 juin 2025.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <TeamCard
              name="Boketshu Kadele"
              role="Co-présidente & secrétaire"
            />
            <TeamCard
              name="Moukoko Doualla Yvonne Esther"
              role="Co-présidente & trésorière"
            />
            <TeamCard
              name="Sitoua Kedeng Reine Juliette"
              role="Vice-présidente & coordinatrice"
            />
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="adherer" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight">Adhérer</h2>
            <p className="mt-2 max-w-3xl text-zinc-700">
              Remplissez ce formulaire pour rejoindre l’association. Votre
              demande sera transmise par email à l’équipe.
            </p>

            <form
              action="https://formspree.io/f/xreaakka"
              method="POST"
              className="mt-6 grid gap-4 md:grid-cols-2"
            >
              {/* Optional email subject */}
              <input
                type="hidden"
                name="_subject"
                value="Nouvelle demande d’adhésion — LES AMAZONES"
              />

              <Input label="Nom complet" placeholder="Votre nom" name="fullName" />
              <Input
                label="Email"
                placeholder="vous@email.com"
                type="email"
                name="email"
              />
              <Input label="Téléphone" placeholder="+33 ..." name="phone" />
              <Input label="Ville" placeholder="Votre ville" name="city" />

              <div className="md:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-orange-600"
                  rows={4}
                  placeholder="Pourquoi souhaitez-vous adhérer ?"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700"
                >
                  Envoyer la demande
                </button>
                <p className="mt-2 text-xs text-zinc-500">
                  Après envoi, vous recevrez une confirmation (selon la
                  configuration Formspree). Si c’est la première fois, Formspree
                  peut demander une validation de l’adresse email de réception.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Contact</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border p-6">
              <div className="flex items-center gap-2 font-semibold">
                <Mail size={18} />
                Email
              </div>
              <p className="mt-2 text-sm text-zinc-700">
                Ajoute ici l’email officiel de l’association.
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold">
                <MapPin size={18} />
                Adresse
              </div>
              <p className="mt-2 text-sm text-zinc-700">
                Le siège social est indiqué comme [adresse] dans vos documents.
                Remplace par l’adresse exacte.
              </p>

              <div className="mt-6">
                <Link
                  href="#adherer"
                  className="inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Devenir membre
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border p-6">
              <h3 className="text-lg font-semibold">Prochaines étapes</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>• Ajouter les textes définitifs (mission, activités).</li>
                <li>• Ajouter des photos réelles (évènements, ateliers).</li>
                <li>• Ajouter page “Don” (HelloAsso/Stripe).</li>
              </ul>

              <p className="mt-4 text-xs text-zinc-500">
                À chaque push sur GitHub, Vercel redéploie automatiquement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <div>
              <div className="font-semibold text-zinc-900">LES AMAZONES</div>
              <div>© {new Date().getFullYear()} • Tous droits réservés</div>
            </div>
            <div className="text-zinc-600">
              Site réalisé avec Next.js • Déployé sur Vercel
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-orange-50 p-3 text-orange-700">
          {icon}
        </div>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-zinc-700">{text}</p>
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-zinc-700">
        {items.map((it) => (
          <li key={it}>• {it}</li>
        ))}
      </ul>
    </div>
  );
}

function TeamCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold">{name}</div>
      <div className="mt-1 text-sm text-zinc-700">{role}</div>
      <div className="mt-4 h-1 w-16 rounded-full bg-orange-600" />
    </div>
  );
}

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
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-orange-600"
        required={name === "email" || name === "fullName"}
      />
    </div>
  );
}