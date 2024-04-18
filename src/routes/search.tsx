import { createFileRoute, useNavigate } from "@tanstack/react-router";

import * as v from "valibot";

// type Type = "Normal" | "Fire" | "Water" | "Electric" | "Grass" | "Ice" | "Fighting" | "Poison"

const Type = v.union([
  v.literal("Normal"),
  v.literal("Fire"),
  v.literal("Water"),
  v.literal("Electric"),
  v.literal("Grass"),
  v.literal("Ice"),
  v.literal("Fighting"),
  v.literal("Poison"),
]);

// type ItemFilters = {
//     query: string
//     hasEvolutions: boolean
//     types: Type[]
// }

const ItemFilters = v.object({
  query: v.optional(v.string()),
  hasEvolutions: v.optional(v.boolean()),
  types: v.optional(v.array(Type)),
});

type ItemFilters = v.Output<typeof ItemFilters>;

export const Route = createFileRoute("/search")({
  validateSearch: (search) => v.parse(ItemFilters, search),
  component: Search,
});

function Search() {
  
  const { query, hasEvolutions, types } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const updateFilters = (name: keyof ItemFilters, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) });
  };

  console.log("Component redered");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "200px" }}
    >
      <h2>Search</h2>
      You serached for:{" "}
      <input
        value={query}
        onChange={(e) => updateFilters("query", e.target.value)}
      />
      <br />
      <div>
        Has evolutions:{" "}
        <input
          type="checkbox"
          checked={hasEvolutions}
          onChange={(e) => updateFilters("hasEvolutions", e.target.checked)}
        />
      </div>
      <br />
      Types:{" "}
      <select
        multiple
        onChange={(e) => {
          updateFilters(
            "types",
            Array.from(e.target.selectedOptions).map((option) => option.value)
          );
        }}
      >
        <option value="Normal">Normal</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Electric">Electric</option>
        <option value="Grass">Grass</option>
        <option value="Ice">Ice</option>
        <option value="Fighting">Fighting</option>
        <option value="Poison">Poison</option>
      </select>
      <pre>{JSON.stringify({ query, hasEvolutions, types }, null, 2)}</pre>
    </div>
  );
}
