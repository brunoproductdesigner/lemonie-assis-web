<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the public site as one anchored index route because the client explicitly requested a one-page experience.
- Keep reusable interactive controls in `src/components/ui` so accessibility and visual variants remain consistent.
- Keep Nitro pinned to the Vercel preset for self-hosted builds so SSR and file-based routes deploy through Vercel's Build Output API.
