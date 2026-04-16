export interface StagingProject {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  images: string[];
}

const stagingBase = "/images/staging";

export const stagingProjects: StagingProject[] = [
  {
    slug: "pleasanton",
    title: "Pleasanton, CA",
    subtitle: "Kitchen remodel",
    coverImage: `${stagingBase}/public:images:staging:cover.JPG`,
    images: [
      `${stagingBase}/public:images:staging:gallyery-1.JPG`,
      `${stagingBase}/public:images:staging:gallyery-2.JPG`,
      `${stagingBase}/public:images:staging:gallyery-3.JPG`,
      `${stagingBase}/public:images:staging:gallyery-4.JPG`,
      `${stagingBase}/public:images:staging:gallyery-5.JPG`,
      `${stagingBase}/public:images:staging:gallyery-6.JPG`,
      `${stagingBase}/public:images:staging:gallyery-7.jpeg`,
      `${stagingBase}/public:images:staging:gallyery-8.jpeg`,
      `${stagingBase}/public:images:staging:gallyery-9.jpeg`,
      `${stagingBase}/public:images:staging:gallyery-10.jpeg`,
      `${stagingBase}/public:images:staging:gallyery-11.jpeg`,
    ],
  },
];

export function getStagingProject(
  slug: string
): StagingProject | undefined {
  return stagingProjects.find((project) => project.slug === slug);
}

export function getAllStagingSlugs(): string[] {
  return stagingProjects.map((project) => project.slug);
}
