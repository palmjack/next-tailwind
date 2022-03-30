type TArchivePosts = {
  text?: string;
  url?: string;
  code?: string;
  img?: string;
};

export const archivePosts: TArchivePosts[] = [
  {
    text: 'optymalizacja contextu',
    url: 'https://www.reddit.com/r/reactjs/comments/f5ucuy/that_react_component_right_under_your_context/'
  },
  { text: 'react cheatsheets', url: 'https://www.reactacademy.ca/handouts/' },
  {
    text: 'przekazywanie refa z hooka useRef do komponentu dziecka:',
    url: 'https://www.youtube.com/watch?v=ScT4ElKd6eo'
  },
  {
    text: 'a tutaj na końcu rozwiązanie jak połączyć kilka refów razem:',
    url: 'https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd'
  },
  {
    text: 'react hooks - kod źródłowy:',
    url: 'https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberHooks.js'
  },
  { url: 'https://alligator.io/js/v8-optional-chaining-nullish-coalescing/' },
  { text: 'teraz na pewno polubisz reduxa ;)', url: 'https://youtu.be/9lCmbth63k0' },
  {
    url: 'https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680'
  },
  { url: 'https://date-fns.org/ alternatywa dla moment.js' },
  { url: 'https://lab.github.com' },
  { url: 'https://dev.to/wgao19/why-running-yarn-upgrade-does-not-update-my-package-json-3mon' },
  { url: 'https://www.npmjs.com/package/focus-visible' },
  { url: 'https://css-tricks.com/almanac/selectors/f/focus-visible/' },
  {
    text: 'Cenne wskazówki Kenta odnośnie optymalizacji i jej kosztu przy używaniu useMemo, useCallback i React.memo (i dlaczego nie zawsze warto tego używać). Dobry temat do dyskusji. Np. Kent ogólnie nie poleca używać np. React.memo i zaleca rozważność w używaniu useMemo i useCallback,  bo czasem koszt tych optymalizacji przewyższa zysk :)',
    url: 'https://kentcdodds.com/blog/usememo-and-usecallback'
  },
  {
    text: 'z racji ze mamy coraz wiecej grida podrzucam fajny artykul',
    url: 'https://www.freecodecamp.org/news/css-grid-changes-how-we-can-think-about-structuring-our-content/'
  },
  {
    text: 'a tu duzo fajnych, pozytecznych rzeczy',
    url: 'https://css-tricks.com/phuoc-nguyens-one-page-wonders'
  },
  {
    text: 'Chyba najlepszy film o react-query, w drugiej czesci tworca opowiada o useMutation i queryCache',
    url: 'https://www.youtube.com/watch?v=AMieB70uCIw'
  },
  { text: 'TS any vs unknown', url: 'https://fsgeek.pl/post/typescript-any-vs-unknown/' },
  { text: 'TS interface vs type', url: 'https://www.youtube.com/watch?v=crjIq7LEAYw' },
  { text: 'TS useReducer', url: 'https://www.youtube.com/watch?v=9KzQ9xFSAEU' },
  { text: 'FB zrobil cos na ksztalt reduxa', url: 'https://recoiljs.org' },
  {
    url: 'https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/'
  },
  { url: 'https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript' },
  { text: 'moze kiedys sie przyda', url: 'https://github.com/streamich/react-use' },
  { text: 'react-query niedlugo w wersji 2.0', url: 'https://github.com/tannerlinsley/react-query/pull/585' },
  { text: 'local storage na sterydach', url: 'https://github.com/localForage/localForage' },
  { text: 'jesli animujesz gsapem to czytaj to', url: 'https://greensock.com/mistakes' },
  { text: 'dzieki', url: 'https://developers.google.com/web/tools/chrome-devtools/coverage' },
  { url: 'https://dev.to/vaibhavkhulbe/7-security-tips-for-your-react-application-4e78' },
  { text: 'do przejrzenia', url: 'https://react-spectrum.adobe.com/blog/introducing-react-spectrum.html' },
  {
    text: 'o stylowaniu formularzy slow kilka',
    url: 'https://stegosource.com/build-html-forms-right-styling/'
  },
  { text: 'FB umie wcag', url: 'https://engineering.fb.com/web/facebook-com-accessibility/' },
  { text: 'To co, testujemy?', url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y' },
  { text: 'jest z defaultu', url: 'https://www.npmjs.com/package/eslint-config-react-app' },
  {
    text: 'Z tego wpisu wynika, że defaultowo tylko część reguł z tej paczki jest sprawdzana, pozostałe trzeba dokonfigurować.'
  },
  {
    text: 'Po nitce do kłębka znalazłam też react-axe. Autorzy jsx-a11y rekomendowali użycie dodatkowo react-a11y, a autorzy tej paczki z kolei przestali ją rozwijać na rzecz tej pierwszej powyżej bo jest lepsza.'
  },
  { text: 'To zawsze mozey rozszerzyc config' },
  {
    text: 'However, if you are using Create React App and have not ejected, any additional rules will only be displayed in the IDE integrations, but not in the browser or the terminal.'
  },
  { text: 'Więc wszyscy muszą mieć poprawnie skonfugurowanego eslinta w ide' },
  {
    text: 'Tak. Anyways myślę, że warto skoro jest to must-have w naszych projektach i szczególnie jak będą pojawiać się nowe osoby. Zestaw narzędzi do sprawdzania wcag pomoże.'
  },
  {
    text: 'Lazysizes, wspierany jest tez lazyloading iframeow, wykorzystalismy na historii secure ',
    url: 'https://github.com/aFarkas/lazysizes'
  },
  { url: 'https://dev.to/ibrahima92/react-typescript-how-to-set-types-on-hooks-cheat-sheet-gll' },
  {
    text: 'Jesli chcesz uzywac fetcha, to rob to dobrze',
    url: 'https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper'
  },
  {
    text: 'Nie do konca react, ale podrzucam ku pamieci',
    url: 'https://developers.google.com/speed/pagespeed/module'
  },
  {
    text: 'Swietne narzedzie do weryfikacji paczki przed jej ewentualnym wykorzystaniem (duzo statystyk, alternatywne biblioteki)',
    url: 'https://openbase.io/'
  },
  { text: 'jakby przyszla potrzeba zamockowania legitnego api', url: 'https://mswjs.io' },
  {
    text: 'importowanie Reacta kiedys ulegnie zmianie, ale juz teraz nie jest konieczne jego importowanie w kazdym komponencie',
    url: 'https://epicreact.dev/importing-react-through-the-ages/'
  },
  {
    text: '[react-hook-form] Jeśli korzysta się z useForm( { shouldUnregister: false }) (co oznacza, że inputy przy odmontowaniu nie znikają z formularza, np. po zmianie aktualnego kroku) to trzeba pamiętać żeby do useWatch przekazać defaultValue w takiej formie. Jeśli useWatch zostanie odmontowany i ponownie zamontowany to nie weźmie value tylko defaultValue i dopiero wtedy się zasubskrybuje od nowa na zmiany inputa (np. zwróci undefined, mimo że pole ma już jakąś wartość).',
    code: 'const watchedValue = useWatch({ name, defaultValue: getValues(name) });'
  },
  {
    text: 'Blog contributora react-query, ciekawy wpis o manipulowaniu danych otrzymanych z rq na poziomie funkcji useQuery',
    url: 'https://tkdodo.eu/blog/react-query-data-transformations'
  },
  {
    text: 'To moze byc game changer w budowaniu aplikacji frontowych - oparty o esbuild (napisane w go), ultra szybki',
    url: 'https://vitejs.dev'
  },
  { text: 'ze specjalna dedykacja', url: 'https://github.com/millsp/ts-toolbelt' },
  { url: 'https://blog.getbootstrap.com/2021/05/05/bootstrap-5/' },
  { url: 'https://github.com/validatorjs/validator.js' },
  { url: 'https://medium.com/swlh/graphql-js-vs-typegraphql-vs-graphql-nexus-2a8036deb851' },
  {
    text: '@all nowe, lepsze podejscie w przypadku uzywania contextu - migrujemy sie na takie rozwiazanie w kolejnych projektach',
    code: `import { FC, createContext, useContext } from "react";
    import { useMedia } from 'react-use';
    
    interface IMatchMediaContext {
      isXs: boolean;
    }
    
    const MatchMediaContext = createContext<IMatchMediaContext>({
      isXs: false
    });
    
    export const MatchMediaContextProvider: FC = ({ children }) => {
      const isXs = useMedia('(max-width: 575.98px)');
    
      return <MatchMediaContext.Provider value={{ isXs }}>{children}</MatchMediaContext.Provider>;
    };
    
    const useMatchMediaContext = (): IMatchMediaContext => useContext(MatchMediaContext);
    
    export default useMatchMediaContext;`
  },
  { url: 'https://tkdodo.eu/blog/react-query-render-optimizations' },
  { text: 'Kiedys sie moze przydac', url: 'https://github.com/marak/Faker.js/' },
  { url: 'https://www.loggly.com/blog/http-status-code-diagram/' },
  {
    text: 'z dedykacja dla',
    url: 'https://dev.to/jameswallis/animating-next-js-page-transitions-with-framer-motion-1g9j'
  },
  {
    text: 'o importach rzeczy kilka',
    url: 'https://jakearchibald.com/2021/export-default-thing-vs-thing-as-default/'
  },
  { url: 'https://podcast.allegro.tech/wydajnosc_frontendu/' },
  { url: 'https://tkdodo.eu/blog/dont-over-use-state' },
  {
    text: 'przyjdzie taki czas, ze date-fns nie bedzie potrzebny',
    url: 'https://tc39.es/proposal-temporal/docs/'
  },
  {
    text: 'jakby ktoś się zastanawiał tak jak ja, dlaczego w bootstrapie 5 nie działają klasy do spacingu right/left (mr-, ml-, pr-, pl-), to dlatego że zmienili nazwy:',
    code: `s - (start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL
    e - (end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL`
  },
  { text: 'czyli o ile nie robimy apki po arabsku albo hebrajsku `ml -> ms`, `mr -> me`' },
  {
    text: 'jak potrzeba wywalic appke to fajna stronka (lub dowolny inny status w urlu)',
    url: 'http://httpstat.us/500'
  },
  { text: 'do odswiezenia wiedzy', url: 'https://alexsidorenko.com/blog/react-render-always-rerenders/' },
  { url: 'https://greensock.com/react' },
  {
    text: 'Zmiana w react-hook-form dotycząca obsługi błędów w handleSubmit wymaga u nas drobnych modyfikacji kodu (dopóki autor nie wprowadzi opcji konfiguracji tego zachowania albo jakiegoś innego rozwiązania, więcej tutaj https://github.com/react-hook-form/react-hook-form/pull/5391). Póki co najprostsza opcja jaką znalazłem (pozwala zachować callback onError z react-query, nie ma try-catch) to',
    code: `const customSubmitHandler = (e: FormEvent<HTMLFormElement>) => handleSubmit(onSubmit)(e).catch(() => {});
      ...
      <form onSubmit={customSubmitHandler}>`
  },
  {
    text: 'dodam, ze to jest ten specyficzny case kiedy jeszcze uzywamy `reset()` z useEffectem, gdzie sprawdzamy `isSubmitSuccessful`'
  },
  {
    url: 'https://jasonwatmore.com/post/2021/08/23/next-js-api-global-error-handler-example-tutorial'
  },
  {
    text: '@here fajny feature doszedl w VSC',
    url: 'https://twitter.com/matanbobi/status/1447891309566562306'
  },
  { url: 'https://www.youtube.com/watch?v=qSkHRVLcj6U' },
  {
    text: 'Jakby nam kiedys przyszlo do glowy robic upgrade React Router do v.6',
    url: 'https://reactrouter.com/docs/en/v6/upgrading/v5'
  },
  {
    text: 'VSCode - zdecydowanie polecam wrzucic do konfiguracji',
    code: `"editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": true,
    "editor.guides.highlightActiveIndentation": true,`
  },
  {
    text: 'Note: for static pages from the [Automatic Static Optimization](/docs/advanced-features/automatic-static-optimization.md) or [prerendering](/docs/basic-features/data-fetching.md#getstaticprops-static-generation) params from rewrites will be parsed on the client after hydration and provided in the query.',
    url: 'https://github.com/vercel/next.js/pull/30747'
  },
  {
    text: '@here do zapamietania po wsze czasy przy budowaniu obrazu dockerowego zmienna `CMS_DOCKER_MEDIA_URL` musi miec juz URL kontenera, bo nadpisywanie enva nie dziala w przypadku pliku `next.config.js`',
    code: `#ALWAYS USE DOCKER INTERNAL ADDRESS
      CMS_DOCKER_MEDIA_URL=http://ose-congress-wordpress/wp-content/uploads/`
  },
  { text: '🙄', url: 'https://jamie.build/const' },
  {
    text: 'swiezo ze szkolenia z bezpieczenstwa aplikacji',
    url: 'https://application.security/free/kontra-front-end-top-10'
  },
  { text: 'Te aplikacje do skanowania podatnosci warto tez zapamietac, np. wpscan' },
  { url: 'https://conf.reactjs.org/' },
  {
    text: '@here w kontekscie wszystkich projektow do zapamietania po wsze czasy!!! jesli wpychamy do DB adres email to zawsze robmy na nim `toLowerCase()`'
  },
  {
    text: '@here czlowiek sie uczy cale zycie... zeby czytac poprawna date i godzine to warto przedtem ustawic odpowiednia strefe czasowa w Dockerfile...',
    url: 'https://gitlab.drsi.nask.pl/niedajsiezrobic/niedajsiezrobic-front/-/commit/ed535db9e0317150e15fbff2de1cbbb9d97f6507'
  },
  {
    text: "@here do zapamietania jesli chcemy skorzystac z autoryzacji po stronie WP, a odwolujemy sie do niego po adresie serwisu (ktory nie leci po https) np. `http://ose-congress-wordpress/?graphql=true` to trzeba uzyc filtru `add_filter('wp_is_application_passwords_available', '__return_true');`"
  },
  {
    text: '@here temat zwiazany z WP - pozbywamy sie template Dynamic i ustawiamy acfa Strona generyczna na Default template, oczywiscie w przyszlych projektach'
  },
  { text: 'do poczytania na deser', url: 'https://github.com/facebook/create-react-app/pull/8177' },
  { url: 'https://www.npmjs.com/package/@artsy/fresnel' },
  { url: 'https://daisyui.com/' },
  { img: 'E5CjfqCS3YmZ7hzWg-Screenshot 2022-01-21 at 10.58.45 AM.png' },
  {
    text: 'jesli mamy ACFa typu oEmbed to GQL zwroci nam link, ktory zostal wklejony, a nie prawidlowego embeda, takze na szybko mozna ogarnac to tak:',
    code: `src={data.acfLecture.lectureVideo.replace('https://youtu.be/', 'https://www.youtube.com/embed/')}`
  },
  {
    text: "@here zdecydowanie warto obejrzec w kontekscie optymalizacji reduce'a",
    url: 'https://youtu.be/tcZbY-Q0TIE'
  },
  { text: 'Optymalizacja contextu z uzyciem react-tracked', url: 'https://youtu.be/6yBv-_COJkk' },
  { text: 'zostawiam tu, moze kiedys sie przyda', url: 'https://www.maptiler.com/cloud/plans/' },
  {
    text: 'wrzucam tu bo to wazne info (dotyczy wymuszanego full reloada)',
    img: '1.png'
  },
  { img: '2.png' }
];
