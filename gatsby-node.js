const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const lessonPlanQuery = await graphql(`
    query LessonPlansQuery {
      allContentfulLessonPlan {
        nodes {
          activities {
            id
            activities {
              month
              week1
              week2
              week3
              week4
            }
          }
          slug
          month
          theme
          year
        }
      }
    }
  `);

  const lessonPlans = lessonPlanQuery.data.allContentfulLessonPlan.nodes;
  const plansPerPage = 12

  const numPages = Math.ceil(lessonPlans.length / plansPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `plans/2021` : `/plans/${i + 2021}`,
      component: path.resolve("./src/templates/lesson-list-template.js"),
      context: {
        limit: plansPerPage,
        skip: i * plansPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  lessonPlanQuery.data.allContentfulLessonPlan.nodes.forEach(month => {
    const monthSlug = month.slug;
    createPage({
      path: `/plans/${monthSlug}`,
      component: path.resolve(`src/templates/month-template.js`),
      context: {
        month: month.month  
      }
    })
  })
};
