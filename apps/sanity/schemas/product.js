export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required!")
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) =>
        Rule.required().error("Price is required!")
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule) =>
        Rule.required().error("Image is required!")
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().error("Description is required!")
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
      },
      validation: (Rule) => Rule.required().error("Slug is required!")
    },
    {
      name: "productBrand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
      validation: (Rule) =>
        Rule.required().error("Brand is required!")
    },
    {
      name: "productCategories",
      title: "List of Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (Rule) => [
        Rule.required()
          .min(1)
          .error("You have to add minimum 1 category!"),
        Rule.required()
          .unique()
          .error("You have to add unique categories!")
      ]
    },
    {
      name: "rating",
      title: "Rating",
      type: "number"
    },
    {
      name: "numReviews",
      title: "Number Reviews",
      type: "number"
    },
    {
      name: "countInStock",
      title: "Count in Stock",
      type: "number"
    }
  ]
};
