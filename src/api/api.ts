const backendLink = process.env.STRAPI_PUBLIC_BACKEND_LINK;
const bearerToken = process.env.BEARER_TOKEN;

export type Aktualnosc = {
  id: number;
  podtytul: string;
  tytul: string;
  data: string;
  opis: string;
  pliki?: { nazwa: string; url: string }[];
};

type StrapiFile = {
  attributes?: {
    name?: string;
    url?: string;
  };
};

type StrapiArticle = {
  id: number;
  attributes?: Omit<Aktualnosc, 'id' | 'pliki'> & {
    pliki?: { data?: StrapiFile[] };
  };
};

function getFileUrl(url: string) {
  return url.startsWith('/') ? `${backendLink}${url}` : url;
}

export async function getAktualnosci(): Promise<Aktualnosc[]> {
  if (!backendLink) {
    return [];
  }

  try {
    const response = await fetch(`${backendLink}/api/aktualnoscis?sort=data:desc&populate=*`, {
      cache: 'no-store',
      headers: bearerToken ? { Authorization: 'Bearer ' + bearerToken } : undefined,
    });

    if (!response.ok) {
      return [];
    }

    const { data = [] }: { data?: StrapiArticle[] } = await response.json();

    return data.flatMap(({ id, attributes }) => {
      if (!attributes?.tytul || !attributes.data) {
        return [];
      }

      return [{
        id,
        tytul: attributes.tytul,
        podtytul: attributes.podtytul ?? '',
        data: attributes.data,
        opis: attributes.opis ?? '',
        pliki: attributes.pliki?.data?.flatMap((file) => {
          const url = file.attributes?.url;

          return url ? [{
            nazwa: file.attributes?.name ?? 'Pobierz plik',
            url: getFileUrl(url),
          }] : [];
        }),
      }];
    });
  } catch {
    return [];
  }
}
