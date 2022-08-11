export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(5)
          .error("A title of min. 5 characters is required"),
        Rule.max(50).warning("Shorter titles are usually better")
      ]
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
      },
      validation: (Rule) => Rule.required().error("Slug is required!")
    },
    {
      title: "Sections",
      name: "sections",
      type: "array",
      of: [{ type: "string" }]
    }
  ]
};
