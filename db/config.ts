import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config
const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => Author.columns.id }),
    body: column.text(),
  }
});

export default defineDb({
  tables: { Comment, Author },
})