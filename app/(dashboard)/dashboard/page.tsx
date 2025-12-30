'use client';

import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, StickyNote } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DashboardPage() {
  const { data: notes, mutate, isLoading } = useSWR('/api/notes', fetcher);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function addNote() {
    await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    setTitle('');
    setContent('');
    mutate();
  }

  return (
    <section className="flex-1 bg-amber-50/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Welcome back
            </p>
            <h1 className="text-2xl font-semibold text-slate-900">
              Your Sticky Notes
            </h1>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/notes" className="flex items-center gap-2">
              <StickyNote className="h-4 w-4" />
              Open Notes
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {notes?.map((note: any, idx: number) => (
                <Link
                  key={note.id}
                  href={`/notes/${note.id}`}
                  className={`sticky-note block min-h-[160px] transition-transform duration-150 hover:-rotate-1 hover:shadow-lg ${
                    idx % 2 === 0 ? '-rotate-1' : 'rotate-1'
                  }`}
                >
                  <h2 className="mb-2 text-base font-semibold text-slate-800">
                    {note.title}
                  </h2>
                  <p className="text-sm text-slate-700 whitespace-pre-wrap break-words">
                    {note.content.length > 120
                      ? `${note.content.slice(0, 120)}...`
                      : note.content}
                  </p>
                  <span className="mt-4 inline-flex text-xs font-medium text-slate-500">
                    Tap to open
                  </span>
                </Link>
              ))}
              {!isLoading && notes?.length === 0 && (
                <div className="sticky-note col-span-full flex flex-col items-center justify-center gap-2 text-center">
                  <p className="text-sm text-slate-700">
                    No notes yet. Start by creating your first sticky note!
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="sticky-note rotate-0 self-start">
            <div className="mb-4 flex items-center gap-2 text-slate-800">
              <PlusCircle className="h-5 w-5 text-orange-500" />
              <h2 className="text-lg font-semibold">Add a new note</h2>
            </div>
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                await addNote();
              }}
              className="space-y-4"
            >
              <Input
                placeholder="Note title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
                className="bg-white/70"
              />
              <Textarea
                placeholder="Write your thoughts..."
                value={content}
                onChange={(event) => setContent(event.target.value)}
                required
                className="min-h-[140px] bg-white/70"
              />
              <Button
                type="submit"
                className="w-full bg-orange-500 text-white hover:bg-orange-600"
              >
                Add Note
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
