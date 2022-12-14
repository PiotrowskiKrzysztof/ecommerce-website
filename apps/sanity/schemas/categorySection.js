export default {
  name: "categorySection",
  type: "object",
  title: "Category Section",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      name: "categoriesList",
      title: "List of categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "mainCategory" }]
        }
      ],
      validation: (Rule) => [
        Rule.required().error("Category is required!"),
        Rule.required()
          .max(3)
          .error("You can add maximum 3 categories!")
      ]
    }
  ]
};
