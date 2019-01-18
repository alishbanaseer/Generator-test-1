import { resolverForgotPasswordData } from './forgot-password-page/resolver.forg
import { resolverSignInRedirect } from './signin-page/resolver-signin-redirect';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { HgbCommonDirectivesModule } from '-hellogbye-ng-common-todo/directives/-hgb-common-directives.module';
import { TutorialPage26562c87Component } from './tutorial-page26562c87/tutorial-page26562c87.component';
 
 
const uiRouterStates: Ng2StateDeclaration[] = [
@@ -38,6 +39,11 @@ const uiRouterStates: Ng2StateDeclaration[] = [
    component: ForgotPasswordPageComponent,
    resolve: [resolverForgotPasswordData]
  },
  {
    name: 'externalarea.tutorial26562c87',
    url: '/tutorial26562c87',
    component: TutorialPage26562c87Component,
  },
  // {
  //   name: 'externalarea.createaccount',
  //   url: '/createaccount',
@@ -77,6 +83,7 @@ const uiRouterStates: Ng2StateDeclaration[] = [
    ExternalAreaComponent,
    SigninPageComponent,
    ForgotPasswordPageComponent,
    TutorialPage26562c87Component,
  ],
})
export class ExternalAreaModule { }