import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    { name: 'Supabase', url: 'https://supabase.com/brand-assets/supabase-logo-wordmark--dark.svg' },
    { name: 'Netlify', url: 'https://www.netlify.com/v3/img/components/netlify-dark.svg' },
    { name: 'Cloudflare', url: 'https://developers.cloudflare.com/assets/brand/cloudflare-logo-white.svg' },
    { name: 'Sentry', url: 'https://sentry-brand.storage.googleapis.com/sentry-logo-white.png' },
    { name: 'Loops', url: 'https://cdn.loops.so/logo-white.svg' },
    { name: 'Algorand', url: 'https://algorand.com/static/algorand-logo-white-6a44d141b6aa9f3b6a716c41f150726e.svg' },
    { name: 'GitHub', url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google', url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Apple', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' }
  ];

  const firstRow = sponsors.slice(0, 6);
  const secondRow = sponsors.slice(6);

  return (
    <section id="sponsors" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Our Sponsors
        </h2>

        <div className="space-y-16">
          <div className="relative">
            <div className="flex space-x-24 animate-scroll">
              {[...firstRow, ...firstRow].map((sponsor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[250px] h-24 group transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={sponsor.url}
                    alt={sponsor.name}
                    className="max-h-16 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="flex space-x-24 animate-scroll-reverse">
              {[...secondRow, ...secondRow].map((sponsor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[250px] h-24 group transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={sponsor.url}
                    alt={sponsor.name}
                    className="max-h-16 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;