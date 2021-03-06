import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
import { UpgradeModule } from "@angular/upgrade/static";

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const upgrade: UpgradeModule = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ["ng2uigrid"]);
});
