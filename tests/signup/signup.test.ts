import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { Signup } from "../../pages/signup/signupPO";
import { test } from "../../fixture/fixture";

const randomName = faker.name.firstName();
const randomEmail = faker.internet.email();
// console.log(` randomName -> ${randomName} \n randomEmail -> ${randomEmail}`);

test("Create User Account", async ({ page, pageContentData }) => {
  const reg = new Signup(page);
  await reg.visit();

  await reg.gotoSignup();
  await expect(page.locator(reg.getVerifySignupFormSelector())).toContainText(
    "New User Signup!"
  );
  await reg.signup(randomName, randomEmail);
  await expect(
    page.locator(reg.getAccountInformationSelector()).nth(0)
  ).toContainText("Enter Account Information");
  await reg.createAccount(pageContentData.createAccount[0]);

  await expect(page.locator(reg.getAccountCreatedSelector())).toContainText(
    "Account Created"
  );
  await reg.clickContinueButton();
  await reg.deleteAccount();

  await expect(page.locator(reg.getAccountDeletedSelector())).toContainText(
    "Account Deleted!"
  );
});
