import { test as testData } from "@playwright/test";
import pageContent from "./pageContent.json";

type pageData = {
  pageContentData: typeof pageContent;
};

const fixture = testData.extend<pageData>({
  pageContentData: pageContent,
});

export const test = fixture;
