export interface JokeParam{
  error: boolean;
  category: string;
  type: string;
  setup: string;
  delivery: string;
  joke: string;
  flags: {
    nsfw: string;
    religious: string;
    political: string;
    racist: string;
    sexist: string;
    explicit: string;
}
  id: number;
  safe: boolean;
  lang: string;
}
