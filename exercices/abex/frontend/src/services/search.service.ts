export class SeachService {
  public static lang: string = "fr";
  public static results: Record<string, unknown>[] = [];

  public static async search(q: string) {
    return (this.results = await fetch(
      `http://localhost:8000/api/search?lang=${this.lang}&q=${q}`
    )
      .then((e) => e.json())
      .then((e) => e.result));
  }
}
