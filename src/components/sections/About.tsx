import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-black/5"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-black/50 text-sm font-medium tracking-[0.3em] uppercase mb-3">
              Our Story
            </p>
            <h2
              id="about-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight"
            >
              A Story Told <br />
              <em>Through Food</em>
            </h2>
            <div className="space-y-4 text-black/65 leading-relaxed text-lg">
              <p>
                Cirilo Ragasa was born in the Philippines and moved to the UK in
                1985. After years working as a freelance chef, he opened Cirilo
                Filipino Kainan on Cable Street in 2008, and has been running it
                alongside his wife ever since.
              </p>
              <p>
                The food isn&apos;t an attempt to replicate what you&apos;d find
                in the Philippines. It&apos;s Cirilo&apos;s take on the Filipino
                dishes he grew up with, familiar flavours cooked the way he
                cooks them. Lighter than you might expect, and better for it.
              </p>
              <p>
                This is a family restaurant, in the truest sense. One kitchen,
                one chef, one vision.
              </p>
            </div>
          </div>

          <div className="relative" aria-hidden="true">
            <div className="rounded-2xl aspect-[4/5] w-full max-w-sm mx-auto relative overflow-hidden bg-black">
              <Image
                src="/images/cirilo-juliet.jpg"
                fill
                className="object-cover"
                alt="Picture of the owners"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
