interface BlogPost {
    archivedAt: number;
    archivedInDashboard: boolean;
    authorName: string;
    blogAuthorId: string;
    categoryId: number;
    contentGroupId: string;
    contentTypeCategory: number;
    created: string;
    createdById: string;
    currentState: string;
    currentlyPublished: boolean;
    domain: string;
    enableGoogleAmpOutputOverride: boolean;
    featuredImage: string;
    featuredImageAltText: string;
    htmlTitle: string;
    id: string;
    language: string;
    layoutSections: object;
    linkRelCanonicalUrl: string;
    metaDescription: string;
    name: string;
    postBody: string;
    postSummary: string;
    publicAccessRules: any[];
    publicAccessRulesEnabled: boolean;
    publishDate: string;
    publishImmediately: boolean;
    rssBody: string;
    rssSummary: string;
    slug: string;
    state: string;
    tagIds: any[];
    translations: object;
    updated: string;
    updatedById: string;
    url: string;
    useFeaturedImage: boolean;
    widgetContainers: object;
    widgets: object;
}

interface BlogApiResponse {
    total: number;
    results: BlogPost[];
}
