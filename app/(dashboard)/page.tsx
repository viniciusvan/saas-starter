import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  PencilLine,
  Cloud,
  Tags,
  Users,
  Search,
  ShieldCheck
} from 'lucide-react';
import { Hero } from '@/components/marketing/Hero';
import { FeaturesSection } from '@/components/marketing/FeaturesSection';
import { HighlightsSection } from '@/components/marketing/HighlightsSection';
import { TestimonialsSection } from '@/components/marketing/TestimonialsSection';
import { Faq } from '@/components/marketing/Faq';
import { Footer } from '@/components/marketing/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero
        title={
          <>
            Capture every idea
            <span className="block text-blue-600">before it disappears</span>
          </>
        }
        subtitle="NoteFlow is a calm, blue-first workspace that keeps your notes, tasks, and research perfectly organized across every device."
        cta={
          <Button asChild size="lg" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
            <Link href="/sign-up">Get Started</Link>
          </Button>
        }
      />
      <FeaturesSection
        items={[
          {
            icon: PencilLine,
            title: 'Rich Editor',
            description: 'Format notes with headings, lists and more.'
          },
          {
            icon: Cloud,
            title: 'Sync Everywhere',
            description: 'Access your notes from any device.'
          },
          {
            icon: Tags,
            title: 'Stay Organized',
            description: 'Tag notes to quickly find them later.'
          },
          {
            icon: Users,
            title: 'Collaborate',
            description: 'Share notes and work together in real time.'
          },
          {
            icon: Search,
            title: 'Powerful Search',
            description: 'Find any note instantly with keywords.'
          },
          {
            icon: ShieldCheck,
            title: 'Private by Design',
            description: 'Your notes stay secure with encryption and access controls.'
          }
        ]}
      />

      <HighlightsSection
        title="Designed for calm, structured thinking"
        subtitle="Everything in NoteFlow is organized around clarity. Capture new ideas quickly, then build them into structured projects with ease."
        items={[
          {
            title: 'Unified inbox',
            description:
              'Drop quick notes, voice memos, or meeting recaps into one inbox and sort later.'
          },
          {
            title: 'Project spaces',
            description:
              'Group notes into focused workspaces for each project, class, or client.'
          },
          {
            title: 'Daily momentum',
            description:
              'Track follow-ups and todos so your notes naturally become next steps.'
          },
          {
            title: 'Share with confidence',
            description:
              'Send a secure link or invite collaborators without losing control of your work.'
          }
        ]}
      />

      <TestimonialsSection
        title="Trusted by people who live in their notes"
        subtitle="From students to startup teams, NoteFlow keeps everyone aligned and moving quickly."
        items={[
          {
            quote:
              'The blue focus mode makes every meeting feel calmer. My team finally finds what they need instantly.',
            name: 'Jordan Lee',
            role: 'Product Lead, Harbor Labs'
          },
          {
            quote:
              'I replaced three apps with NoteFlow. It is the best place to brainstorm and organize research.',
            name: 'Priya Patel',
            role: 'Graduate Researcher'
          },
          {
            quote:
              'Notes, tasks, and context all live together. It feels like the app was built for my workflow.',
            name: 'Marco Ruiz',
            role: 'Creative Director'
          }
        ]}
      />

      <Faq
        items={[
          {
            question: 'Is NoteFlow free to use?',
            answer: 'Yes! You can start taking notes for free with our base plan.'
          },
          {
            question: 'Can I import my existing notes?',
            answer: 'Absolutely. Import from markdown or text files in seconds.'
          },
          {
            question: 'Do you offer a mobile app?',
            answer: 'A dedicated mobile app is coming soon for iOS and Android.'
          }
        ]}
      />

      <Footer />
    </main>
  );
}
