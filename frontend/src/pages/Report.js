import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import VulnChart from '../components/VulnChart';
// import VulnLines from '../components/VulnLines';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Divider from '@mui/material/Divider';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { height } from '@mui/system';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const data = {
    "errors": [
        {
            "code": 2,
            "level": "warn",
            "message": "Timeout when running javascript.lang.security.audit.sqli.node-postgres-sqli.node-postgres-sqli on obfx_modules/mystock-import/js/script.js:\n ",
            "path": "obfx_modules/mystock-import/js/script.js",
            "rule_id": "javascript.lang.security.audit.sqli.node-postgres-sqli.node-postgres-sqli",
            "type": "Timeout"
        }
    ],
    "paths": {
        "scanned": [
            ".eslintrc",
            "CHANGELOG.md",
            "CONTRIBUTING.md",
            "LICENSE.txt",
            "class-autoloader.php",
            "core/app/abstract/class-orbit-fox-module-abstract.php",
            "core/app/class-orbit-fox-admin.php",
            "core/app/class-orbit-fox-global-settings.php",
            "core/app/class-orbit-fox-module-factory.php",
            "core/app/class-orbit-fox-plugin-install.php",
            "core/app/class-orbit-fox-public.php",
            "core/app/helpers/class-orbit-fox-render-helper.php",
            "core/app/index.php",
            "core/app/models/class-orbit-fox-model.php",
            "core/app/views/modules-page.php",
            "core/app/views/partials/empty-tpl.php",
            "core/app/views/partials/module-panel-tpl.php",
            "core/app/views/partials/module-tile-tpl.php",
            "core/app/views/partials/module-toast-tpl.php",
            "core/includes/class-orbit-fox-activator.php",
            "core/includes/class-orbit-fox-deactivator.php",
            "core/includes/class-orbit-fox-i18n.php",
            "core/includes/class-orbit-fox-loader.php",
            "core/includes/class-orbit-fox-neve-dropin.php",
            "core/includes/class-orbit-fox.php",
            "core/includes/index.php",
            "dashboard/assets/orbit-fox.png",
            "dashboard/assets/sparks.jpeg",
            "dashboard/assets/wp-landing.jpg",
            "dashboard/src/components/App.js",
            "dashboard/src/components/AvailableModules.js",
            "dashboard/src/components/DashboardContext.js",
            "dashboard/src/components/Header.js",
            "dashboard/src/components/ModuleCard.js",
            "dashboard/src/components/ModuleSettings.js",
            "dashboard/src/components/PluginCard.js",
            "dashboard/src/components/RecommendedPlugins.js",
            "dashboard/src/components/Snackbar.js",
            "dashboard/src/dashboard.js",
            "dashboard/src/scss/_core-overrides.scss",
            "dashboard/src/scss/_general.scss",
            "dashboard/src/scss/_vars.scss",
            "dashboard/src/scss/components/_available-modules.scss",
            "dashboard/src/scss/components/_header.scss",
            "dashboard/src/scss/components/_module-card.scss",
            "dashboard/src/scss/components/_module-settings.scss",
            "dashboard/src/scss/components/_plugin-card.scss",
            "dashboard/src/scss/components/_recommended-plugins.scss",
            "dashboard/src/style.scss",
            "dashboard/src/utils/common.js",
            "dashboard/src/utils/rest.js",
            "images/orbit-fox.png",
            "index.php",
            "languages/themeisle-companion.pot",
            "obfx_modules/beaver-widgets/custom-fields/number-field/number.js",
            "obfx_modules/beaver-widgets/custom-fields/number-field/number_field.php",
            "obfx_modules/beaver-widgets/custom-fields/toggle-field/toggle.css",
            "obfx_modules/beaver-widgets/custom-fields/toggle-field/toggle.js",
            "obfx_modules/beaver-widgets/custom-fields/toggle-field/toggle_field.php",
            "obfx_modules/beaver-widgets/inc/common-functions.php",
            "obfx_modules/beaver-widgets/init.php",
            "obfx_modules/beaver-widgets/modules/post-grid/css/frontend.css",
            "obfx_modules/beaver-widgets/modules/post-grid/includes/frontend.css.php",
            "obfx_modules/beaver-widgets/modules/post-grid/includes/frontend.php",
            "obfx_modules/beaver-widgets/modules/post-grid/includes/loop-settings.php",
            "obfx_modules/beaver-widgets/modules/post-grid/obfx-post-grid.php",
            "obfx_modules/beaver-widgets/modules/post-grid/post-grid.php",
            "obfx_modules/beaver-widgets/modules/pricing-table/css/frontend.css",
            "obfx_modules/beaver-widgets/modules/pricing-table/includes/frontend.css.php",
            "obfx_modules/beaver-widgets/modules/pricing-table/includes/frontend.php",
            "obfx_modules/beaver-widgets/modules/pricing-table/obfx-pricing-table.php",
            "obfx_modules/beaver-widgets/modules/pricing-table/pricing-table.php",
            "obfx_modules/beaver-widgets/modules/services/css/frontend.css",
            "obfx_modules/beaver-widgets/modules/services/includes/frontend.css.php",
            "obfx_modules/beaver-widgets/modules/services/includes/frontend.php",
            "obfx_modules/beaver-widgets/modules/services/obfx-services.php",
            "obfx_modules/beaver-widgets/modules/services/services.php",
            "obfx_modules/companion-legacy/assets/css/hestia/clients-bar.css",
            "obfx_modules/companion-legacy/assets/js/widget-media.js",
            "obfx_modules/companion-legacy/inc/hestia/common-functions.php",
            "obfx_modules/companion-legacy/inc/hestia/functions.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/customizer.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/features/feature-clients-bar-section.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/features/feature-features-section.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/features/feature-ribbon-section.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/features/feature-team-section.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/features/feature-testimonials-section.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/features/import-zerif-content.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/img/clients1.png",
            "obfx_modules/companion-legacy/inc/hestia/inc/img/clients2.png",
            "obfx_modules/companion-legacy/inc/hestia/inc/img/clients3.png",
            "obfx_modules/companion-legacy/inc/hestia/inc/img/clients4.png",
            "obfx_modules/companion-legacy/inc/hestia/inc/img/clients5.png",
            "obfx_modules/companion-legacy/inc/hestia/inc/sections/hestia-clients-bar-section.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/sections/hestia-features-section.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/sections/hestia-ribbon-section.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/sections/hestia-team-section.php",
            "obfx_modules/companion-legacy/inc/hestia/inc/sections/hestia-testimonials-section.php",
            "obfx_modules/companion-legacy/inc/shop-isle/class-template-loader.php",
            "obfx_modules/companion-legacy/inc/shop-isle/content-slider.php",
            "obfx_modules/companion-legacy/inc/shop-isle/customizer.php",
            "obfx_modules/companion-legacy/inc/shop-isle/functions.php",
            "obfx_modules/companion-legacy/inc/shop-isle/template-about.php",
            "obfx_modules/companion-legacy/inc/zerif-lite/functions.php",
            "obfx_modules/companion-legacy/inc/zerif-lite/widgets/widget-clients.php",
            "obfx_modules/companion-legacy/inc/zerif-lite/widgets/widget-focus.php",
            "obfx_modules/companion-legacy/inc/zerif-lite/widgets/widget-team.php",
            "obfx_modules/companion-legacy/inc/zerif-lite/widgets/widget-testimonial.php",
            "obfx_modules/companion-legacy/init.php",
            "obfx_modules/custom-fonts/css/admin.css",
            "obfx_modules/custom-fonts/custom_fonts_admin.php",
            "obfx_modules/custom-fonts/custom_fonts_public.php",
            "obfx_modules/custom-fonts/init.php",
            "obfx_modules/custom-fonts/js/admin.js",
            "obfx_modules/elementor-widgets/init.php",
            "obfx_modules/google-analytics/init.php",
            "obfx_modules/header-footer-scripts/init.php",
            "obfx_modules/menu-icons/css/admin.css",
            "obfx_modules/menu-icons/css/fonts/FontAwesome.otf",
            "obfx_modules/menu-icons/css/fonts/fontawesome-webfont.eot",
            "obfx_modules/menu-icons/css/fonts/fontawesome-webfont.svg",
            "obfx_modules/menu-icons/css/fonts/fontawesome-webfont.ttf",
            "obfx_modules/menu-icons/css/fonts/fontawesome-webfont.woff",
            "obfx_modules/menu-icons/css/fonts/fontawesome-webfont.woff2",
            "obfx_modules/menu-icons/css/public.css",
            "obfx_modules/menu-icons/inc/class-menu-icons-obfx-walker.php",
            "obfx_modules/menu-icons/init.php",
            "obfx_modules/menu-icons/js/admin.js",
            "obfx_modules/mystock-import/css/editor-style.css",
            "obfx_modules/mystock-import/css/media.css",
            "obfx_modules/mystock-import/inc/photo.php",
            "obfx_modules/mystock-import/inc/photos.php",
            "obfx_modules/mystock-import/init.php",
            "obfx_modules/mystock-import/js/admin.js",
            "obfx_modules/mystock-import/js/script.js",
            "obfx_modules/policy-notice/init.php",
            "obfx_modules/social-sharing/css/admin.css",
            "obfx_modules/social-sharing/css/public.css",
            "obfx_modules/social-sharing/init.php",
            "obfx_modules/social-sharing/js/admin.js",
            "obfx_modules/social-sharing/js/public.js",
            "obfx_modules/social-sharing/views/hestia-social-sharing-tpl.php",
            "obfx_modules/social-sharing/views/social-sharing-tpl.php",
            "obfx_modules/template-directory/assets/img/neve.svg",
            "obfx_modules/template-directory/assets/img/starter.jpg",
            "obfx_modules/template-directory/assets/img/tpc.svg",
            "obfx_modules/template-directory/css/admin.css",
            "obfx_modules/template-directory/init.php",
            "obfx_modules/template-directory/js/template-directory.asset.php",
            "obfx_modules/template-directory/js/template-directory.js",
            "obfx_modules/template-directory/src/components/App.js",
            "obfx_modules/template-directory/src/components/StarterSitesUnavailable.js",
            "obfx_modules/template-directory/src/template-directory.js",
            "readme.md",
            "readme.txt",
            "themeisle-companion.php",
            "uninstall.php"
        ],
        "skipped": [
            {
                "path": "dashboard/build/dashboard.asset.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "dashboard/build/dashboard.js",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "dashboard/build/style-dashboard.css",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "obfx_modules/menu-icons/css/vendor/font-awesome.min.css",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "obfx_modules/menu-icons/css/vendor/fontawesome-iconpicker.min.css",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "obfx_modules/menu-icons/js/vendor/bootstrap.min.js",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "obfx_modules/menu-icons/js/vendor/fontawesome-iconpicker.min.js",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "obfx_modules/mystock-import/js/script.js",
                "reason": "analysis_failed_parser_or_internal_error"
            },
            {
                "path": "obfx_modules/mystock-import/vendor/phpflickr/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "obfx_modules/mystock-import/vendor/phpflickr/phpflickr.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "obfx_modules/social-sharing/css/vendor/socicon/fonts/Socicon.ttf",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "obfx_modules/social-sharing/css/vendor/socicon/fonts/Socicon.woff",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "obfx_modules/social-sharing/css/vendor/socicon/fonts/Socicon.woff2",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "obfx_modules/social-sharing/css/vendor/socicon/socicon.css",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/autoload.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/class-elementor-extra-widgets.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/css/admin.css",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/css/public.css",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/js/obfx-grid.js",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/load.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/banner.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/content-switcher.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/custom-field.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/custom-layout.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/flipcard.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/instagram-feed.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/progress-circle.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/review-box.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/share-buttons.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/team-member.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/placeholders/typed-headline.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/posts-grid.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/premium-placeholder.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/pricing-table.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/elementor/services.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/woo/best-products.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/woo/class-eaw-wp-widget.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/woo/featured-products.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/woo/popular-products.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/woo/products-categories.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/woo/recent-products.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/woo/sale-products.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/wp/eaw-posts-widget-plus.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/elementor-extra-widgets/widgets/wp/eaw-posts-widget.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/builders/class-elementor-full-width-templates.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/builders/class-none-full-width-templates.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/class-full-width-templates.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/load.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/templates/builder-fullwidth-std.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/templates/builder-fullwidth.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/actions/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/ashe/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/astra/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/avant/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/colormag/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/consulting/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/edge/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/editorial/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/enlightenment/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/envo-business/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/envy-blog/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/experon/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/flash/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/generatepress/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/genesis/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/hestia/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/hitmag/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/hueman/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/kale/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/lodestar/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/maxstore/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/news-portal/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/nikko-portfolio/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/oceanwp/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/online-shop/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/poseidon/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/primer/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/renden/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/shapely/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/spacious/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/storefront/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/sydney/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/total/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/twentyfifteen/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/twentyfourteen/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/twentyseventeen/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/twentysixteen/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/twentythirteen/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/twentytwelve/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/vantage/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/virtue/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/vogue/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/vt-blogging/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/writee/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/zerif-lite/functions.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/full-width-page-templates/themes/zerif-lite/inline-style.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/assets/content-forms.css",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/assets/content-forms.js",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/form_manager.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/rest/server.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/beaver/beaver_widget_base.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/beaver/beaver_widget_manager.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/beaver/class-themeisle-content-forms-beaver-contact.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/beaver/class-themeisle-content-forms-beaver-newsletter.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/beaver/class-themeisle-content-forms-beaver-registration.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/beaver/includes/frontend.css.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/beaver/includes/frontend.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/elementor/contact_admin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/elementor/elementor_widget_base.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/elementor/elementor_widget_manager.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/elementor/newsletter_admin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-admin/elementor/registration_admin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-public/contact_public.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-public/newsletter_public.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-public/registration_public.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/includes/widgets-public/widget_actions_base.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/index.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Api/Batch.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Api/Campaigns.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Api/Fields.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Api/Groups.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Api/Segments.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Api/Settings.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Api/Stats.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Api/Subscribers.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Api/WooCommerce.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Common/ApiAbstract.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Common/ApiConstants.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Common/BatchRequest.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Common/Collection.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Common/RestClient.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/Exceptions/MailerLiteSdkException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/src/MailerLite.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/autoload.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/clue/stream-filter/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/clue/stream-filter/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/clue/stream-filter/src/CallbackFilter.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/clue/stream-filter/src/functions.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/clue/stream-filter/src/functions_include.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/ClassLoader.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/InstalledVersions.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/autoload_classmap.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/autoload_files.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/autoload_namespaces.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/autoload_psr4.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/autoload_real.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/autoload_static.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/installed.json",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/installed.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/composer/platform_check.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/.php_cs",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/Dockerfile",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/UPGRADING.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Client.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/ClientInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Cookie/CookieJar.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Cookie/CookieJarInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Cookie/FileCookieJar.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Cookie/SessionCookieJar.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Cookie/SetCookie.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Exception/BadResponseException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Exception/ClientException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Exception/ConnectException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Exception/GuzzleException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Exception/InvalidArgumentException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Exception/RequestException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Exception/SeekException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Exception/ServerException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Exception/TooManyRedirectsException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Exception/TransferException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Handler/CurlFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Handler/CurlFactoryInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Handler/CurlHandler.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Handler/CurlMultiHandler.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Handler/EasyHandle.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Handler/MockHandler.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Handler/Proxy.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Handler/StreamHandler.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/HandlerStack.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/MessageFormatter.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Middleware.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Pool.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/PrepareBodyMiddleware.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/RedirectMiddleware.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/RequestOptions.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/RetryMiddleware.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/TransferStats.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/UriTemplate.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/Utils.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/functions.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/guzzle/src/functions_include.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/AggregateException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/CancellationException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/Coroutine.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/Create.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/Each.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/EachPromise.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/FulfilledPromise.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/Is.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/Promise.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/PromiseInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/PromisorInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/RejectedPromise.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/RejectionException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/TaskQueue.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/TaskQueueInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/Utils.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/functions.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/promises/src/functions_include.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/.php_cs.dist",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/AppendStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/BufferStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/CachingStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/DroppingStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/FnStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/Header.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/InflateStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/LazyOpenStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/LimitStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/Message.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/MessageTrait.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/MimeType.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/MultipartStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/NoSeekStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/PumpStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/Query.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/Request.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/Response.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/Rfc7230.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/ServerRequest.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/Stream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/StreamDecoratorTrait.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/StreamWrapper.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/UploadedFile.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/Uri.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/UriComparator.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/UriNormalizer.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/UriResolver.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/Utils.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/functions.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/guzzlehttp/psr7/src/functions_include.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/src/Factory/HttplugFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/src/Factory/Psr17Factory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/src/MessageTrait.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/src/Request.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/src/RequestTrait.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/src/Response.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/src/ServerRequest.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/src/Stream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/src/UploadedFile.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/nyholm/psr7/src/Uri.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/.php-cs-fixer.dist.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/.php_cs.dist",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/BatchClient.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/BatchClientInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/BatchResult.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Deferred.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/EmulatedHttpAsyncClient.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/EmulatedHttpClient.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Exception/BatchException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Exception/CircularRedirectionException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Exception/ClientErrorException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Exception/HttpClientNoMatchException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Exception/HttpClientNotFoundException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Exception/LoopException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Exception/MultipleRedirectionException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Exception/ServerErrorException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/FlexibleHttpClient.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpAsyncClientDecorator.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpAsyncClientEmulator.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpClientDecorator.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpClientEmulator.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpClientPool/HttpClientPool.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpClientPool/HttpClientPoolItem.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpClientPool/LeastUsedClientPool.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpClientPool/RandomClientPool.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpClientPool/RoundRobinClientPool.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpClientPool.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpClientRouter.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpClientRouterInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpMethodsClient.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/HttpMethodsClientInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/AddHostPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/AddPathPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/AuthenticationPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/BaseUriPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/ContentLengthPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/ContentTypePlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/CookiePlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/DecoderPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/ErrorPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/HeaderAppendPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/HeaderDefaultsPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/HeaderRemovePlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/HeaderSetPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/HistoryPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/Journal.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/QueryDefaultsPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/RedirectPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/RequestMatcherPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/RequestSeekableBodyPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/ResponseSeekableBodyPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/RetryPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/SeekableBodyPlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin/VersionBridgePlugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/Plugin.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/PluginChain.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/PluginClient.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/PluginClientBuilder.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/PluginClientFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/client-common/src/VersionBridgeClient.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/.php-cs-fixer.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/ClassDiscovery.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Exception/ClassInstantiationFailedException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Exception/DiscoveryFailedException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Exception/NoCandidateFoundException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Exception/NotFoundException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Exception/PuliUnavailableException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Exception/StrategyUnavailableException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Exception.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/HttpAsyncClientDiscovery.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/HttpClientDiscovery.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/MessageFactoryDiscovery.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/NotFoundException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Psr17FactoryDiscovery.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Psr18ClientDiscovery.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Strategy/CommonClassesStrategy.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Strategy/CommonPsr17ClassesStrategy.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Strategy/DiscoveryStrategy.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Strategy/MockClientStrategy.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/Strategy/PuliBetaStrategy.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/StreamFactoryDiscovery.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/discovery/src/UriFactoryDiscovery.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/guzzle6-adapter/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/guzzle6-adapter/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/guzzle6-adapter/puli.json",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/guzzle6-adapter/src/Client.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/guzzle6-adapter/src/Exception/UnexpectedValueException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/guzzle6-adapter/src/Promise.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/.php-cs-fixer.dist.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/puli.json",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/src/Exception/HttpException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/src/Exception/NetworkException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/src/Exception/RequestAwareTrait.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/src/Exception/RequestException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/src/Exception/TransferException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/src/Exception.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/src/HttpAsyncClient.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/src/HttpClient.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/src/Promise/HttpFulfilledPromise.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/httplug/src/Promise/HttpRejectedPromise.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/apigen.neon",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/puli.json",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Authentication/AutoBasicAuth.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Authentication/BasicAuth.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Authentication/Bearer.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Authentication/Chain.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Authentication/Header.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Authentication/Matching.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Authentication/QueryParam.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Authentication/RequestConditional.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Authentication/Wsse.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Authentication.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Builder/ResponseBuilder.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Cookie.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/CookieJar.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/CookieUtil.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Decorator/MessageDecorator.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Decorator/RequestDecorator.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Decorator/ResponseDecorator.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Decorator/StreamDecorator.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Encoding/ChunkStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Encoding/CompressStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Encoding/DechunkStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Encoding/DecompressStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Encoding/DeflateStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Encoding/Filter/Chunk.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Encoding/FilteredStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Encoding/GzipDecodeStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Encoding/GzipEncodeStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Encoding/InflateStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Exception/UnexpectedValueException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Exception.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Formatter/CurlCommandFormatter.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Formatter/FullHttpMessageFormatter.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Formatter/SimpleFormatter.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Formatter.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/MessageFactory/DiactorosMessageFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/MessageFactory/GuzzleMessageFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/MessageFactory/SlimMessageFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/RequestMatcher/CallbackRequestMatcher.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/RequestMatcher/RegexRequestMatcher.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/RequestMatcher/RequestMatcher.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/RequestMatcher.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/Stream/BufferedStream.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/StreamFactory/DiactorosStreamFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/StreamFactory/GuzzleStreamFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/StreamFactory/SlimStreamFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/UriFactory/DiactorosUriFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/UriFactory/GuzzleUriFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/UriFactory/SlimUriFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message/src/filters.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message-factory/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message-factory/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message-factory/puli.json",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message-factory/src/MessageFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message-factory/src/RequestFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message-factory/src/ResponseFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message-factory/src/StreamFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/message-factory/src/UriFactory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/promise/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/promise/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/promise/src/FulfilledPromise.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/promise/src/Promise.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/php-http/promise/src/RejectedPromise.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-client/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-client/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-client/src/ClientExceptionInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-client/src/ClientInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-client/src/NetworkExceptionInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-client/src/RequestExceptionInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-factory/.pullapprove.yml",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-factory/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-factory/src/RequestFactoryInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-factory/src/ResponseFactoryInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-factory/src/ServerRequestFactoryInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-factory/src/StreamFactoryInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-factory/src/UploadedFileFactoryInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-factory/src/UriFactoryInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-message/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-message/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-message/src/MessageInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-message/src/RequestInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-message/src/ResponseInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-message/src/ServerRequestInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-message/src/StreamInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-message/src/UploadedFileInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/psr/http-message/src/UriInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/ralouphie/getallheaders/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/ralouphie/getallheaders/src/getallheaders.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/deprecation-contracts/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/deprecation-contracts/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/deprecation-contracts/function.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Debug/OptionsResolverIntrospector.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Exception/AccessException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Exception/ExceptionInterface.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Exception/InvalidArgumentException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Exception/InvalidOptionsException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Exception/MissingOptionsException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Exception/NoConfigurationException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Exception/NoSuchOptionException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Exception/OptionDefinitionException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Exception/UndefinedOptionsException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/OptionConfigurator.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/Options.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/options-resolver/OptionsResolver.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Idn.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Info.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Resources/unidata/DisallowedRanges.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Resources/unidata/Regex.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Resources/unidata/deviation.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Resources/unidata/disallowed.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Resources/unidata/disallowed_STD3_mapped.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Resources/unidata/disallowed_STD3_valid.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Resources/unidata/ignored.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Resources/unidata/mapped.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/Resources/unidata/virama.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/bootstrap.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-idn/bootstrap80.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-normalizer/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-normalizer/Normalizer.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-normalizer/Resources/stubs/Normalizer.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/canonicalComposition.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/canonicalDecomposition.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/combiningClass.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-normalizer/Resources/unidata/compatibilityDecomposition.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-normalizer/bootstrap.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-intl-normalizer/bootstrap80.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php72/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php72/Php72.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php72/bootstrap.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php73/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php73/Php73.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php73/Resources/stubs/JsonException.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php73/bootstrap.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php80/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php80/Php80.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php80/PhpToken.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php80/Resources/stubs/Attribute.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php80/Resources/stubs/PhpToken.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php80/Resources/stubs/Stringable.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php80/Resources/stubs/UnhandledMatchError.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php80/Resources/stubs/ValueError.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/library/mailerlite/vendor/symfony/polyfill-php80/bootstrap.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-content-forms/load.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/CHANGELOG.md",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/assets/images/animation.jpg",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/assets/images/conditions.jpg",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/assets/images/css.jpg",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/assets/images/optimole-logo.svg",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/assets/js/build/index.asset.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/assets/js/build/index.js",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/assets/js/build/style-index.css",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/index.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/load.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Common/Abstract_module.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Common/Module_factory.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Loader.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Compatibilities.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Dashboard_widget.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Licenser.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Logger.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Notification.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Promotions.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Recommendation.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Review.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Rollback.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Translate.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Modules/Uninstall_feedback.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/src/Product.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/codeinwp/themeisle-sdk/start.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/ClassLoader.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/InstalledVersions.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/LICENSE",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/autoload_classmap.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/autoload_files.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/autoload_namespaces.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/autoload_psr4.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/autoload_real.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/autoload_static.php",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/installed.json",
                "reason": "semgrepignore_patterns_match"
            },
            {
                "path": "vendor/composer/installed.php",
                "reason": "semgrepignore_patterns_match"
            }
        ]
    },
    "results": [
        {
            "check_id": "javascript.browser.security.insecure-document-method.insecure-document-method",
            "end": {
                "col": 23,
                "line": 65,
                "offset": 1348
            },
            "extra": {
                "fingerprint": "895bc04225002c699ded50cb4b7411b4cda939f71ddb9b4503b69d6ac01d651d8f17fea785621bba1bca15a72e65f3329902667edb22d762f52c0008e9715282_0",
                "is_ignored": false,
                "lines": "\ttxt.innerHTML = html;",
                "message": "User controlled data in methods like 'innerHTML', 'outerHTML' or 'document.write' is an anti-pattern that can lead to XSS vulnerabilities",
                "metadata": {
                    "category": "security",
                    "confidence": "LOW",
                    "cwe": [
                        "CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')"
                    ],
                    "cwe2021-top25": true,
                    "cwe2022-top25": true,
                    "impact": "LOW",
                    "license": "Commons Clause License Condition v1.0[LGPL-2.1-only]",
                    "likelihood": "LOW",
                    "owasp": [
                        "A07:2017 - Cross-Site Scripting (XSS)",
                        "A03:2021 - Injection"
                    ],
                    "references": [
                        "https://owasp.org/Top10/A03_2021-Injection"
                    ],
                    "shortlink": "https://sg.run/LwA9",
                    "source": "https://semgrep.dev/r/javascript.browser.security.insecure-document-method.insecure-document-method",
                    "subcategory": [
                        "audit"
                    ],
                    "technology": [
                        "browser"
                    ]
                },
                "metavars": {
                    "$EL": {
                        "abstract_content": "txt",
                        "end": {
                            "col": 5,
                            "line": 65,
                            "offset": 1330
                        },
                        "start": {
                            "col": 2,
                            "line": 65,
                            "offset": 1327
                        }
                    },
                    "$HTML": {
                        "abstract_content": "html",
                        "end": {
                            "col": 22,
                            "line": 65,
                            "offset": 1347
                        },
                        "start": {
                            "col": 18,
                            "line": 65,
                            "offset": 1343
                        }
                    }
                },
                "severity": "ERROR"
            },
            "path": "dashboard/src/utils/common.js",
            "start": {
                "col": 2,
                "line": 65,
                "offset": 1327
            }
        },
        {
            "check_id": "generic.secrets.security.detected-generic-api-key.detected-generic-api-key",
            "end": {
                "col": 52,
                "line": 23,
                "offset": 461
            },
            "extra": {
                "fingerprint": "4f496cc0b4ea2e7938755d65a5e7e9a9bae9171b4b3b631f5f363ac7510f2efcd67c798c9fca0fba8db7b042ba28a7938486394e61e838972f1bf1ec1714f4d4_0",
                "is_ignored": false,
                "lines": "\tconst API_KEY = '97d007cf8f44203a2e578841a2c0f9ac';",
                "message": "Generic API Key detected",
                "metadata": {
                    "category": "security",
                    "confidence": "LOW",
                    "cwe": [
                        "CWE-798: Use of Hard-coded Credentials"
                    ],
                    "cwe2021-top25": true,
                    "cwe2022-top25": true,
                    "impact": "MEDIUM",
                    "license": "Commons Clause License Condition v1.0[LGPL-2.1-only]",
                    "likelihood": "LOW",
                    "owasp": [
                        "A07:2021 - Identification and Authentication Failures"
                    ],
                    "references": [
                        "https://github.com/dxa4481/truffleHogRegexes/blob/master/truffleHogRegexes/regexes.json"
                    ],
                    "shortlink": "https://sg.run/qxj8",
                    "source": "https://semgrep.dev/r/generic.secrets.security.detected-generic-api-key.detected-generic-api-key",
                    "source-rule-url": "https://github.com/dxa4481/truffleHogRegexes/blob/master/truffleHogRegexes/regexes.json",
                    "subcategory": [
                        "audit"
                    ],
                    "technology": [
                        "secrets"
                    ]
                },
                "metavars": {},
                "severity": "ERROR"
            },
            "path": "obfx_modules/mystock-import/init.php",
            "start": {
                "col": 8,
                "line": 23,
                "offset": 417
            }
        },
        {
            "check_id": "typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml",
            "end": {
                "col": 52,
                "line": 67,
                "offset": 1887
            },
            "extra": {
                "dataflow_trace": {
                    "intermediate_vars": [
                        {
                            "content": "description",
                            "location": {
                                "end": {
                                    "col": 40,
                                    "line": 61,
                                    "offset": 1705
                                },
                                "path": "dashboard/src/components/ModuleCard.js",
                                "start": {
                                    "col": 29,
                                    "line": 61,
                                    "offset": 1694
                                }
                            }
                        }
                    ],
                    "taint_sink": [
                        "CliLoc",
                        [
                            {
                                "end": {
                                    "col": 52,
                                    "line": 67,
                                    "offset": 1887
                                },
                                "path": "dashboard/src/components/ModuleCard.js",
                                "start": {
                                    "col": 41,
                                    "line": 67,
                                    "offset": 1876
                                }
                            },
                            "description"
                        ]
                    ],
                    "taint_source": [
                        "CliLoc",
                        [
                            {
                                "end": {
                                    "col": 40,
                                    "line": 61,
                                    "offset": 1705
                                },
                                "path": "dashboard/src/components/ModuleCard.js",
                                "start": {
                                    "col": 29,
                                    "line": 61,
                                    "offset": 1694
                                }
                            },
                            "description"
                        ]
                    ]
                },
                "fingerprint": "05eaa57189a141a927d776c2436b4785302d92f421174da87a98fe8aa0a2bdfaf7a63f806b72b2e1d3ca408dd8f4c45c6b4a40333fd20e4115b8ed879b07850a_0",
                "is_ignored": false,
                "lines": "\t\t\t\t\tdangerouslySetInnerHTML={{ __html: description }}",
                "message": "Detection of dangerouslySetInnerHTML from non-constant definition. This can inadvertently expose users to cross-site scripting (XSS) attacks if this comes  from user-provided input. If you have to use dangerouslySetInnerHTML, consider using a sanitization library such as DOMPurify to sanitize your HTML.",
                "metadata": {
                    "category": "security",
                    "confidence": "MEDIUM",
                    "cwe": [
                        "CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')"
                    ],
                    "cwe2021-top25": true,
                    "cwe2022-top25": true,
                    "impact": "MEDIUM",
                    "license": "Commons Clause License Condition v1.0[LGPL-2.1-only]",
                    "likelihood": "MEDIUM",
                    "owasp": [
                        "A07:2017 - Cross-Site Scripting (XSS)",
                        "A03:2021 - Injection"
                    ],
                    "references": [
                        "https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml"
                    ],
                    "shortlink": "https://sg.run/rAx6",
                    "source": "https://semgrep.dev/r/typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml",
                    "subcategory": [
                        "vuln"
                    ],
                    "technology": [
                        "react"
                    ]
                },
                "metavars": {
                    "$X": {
                        "abstract_content": "description",
                        "end": {
                            "col": 40,
                            "line": 61,
                            "offset": 1705
                        },
                        "start": {
                            "col": 29,
                            "line": 61,
                            "offset": 1694
                        }
                    },
                    "$Y": {
                        "abstract_content": "p",
                        "end": {
                            "col": 7,
                            "line": 65,
                            "offset": 1806
                        },
                        "start": {
                            "col": 6,
                            "line": 65,
                            "offset": 1805
                        }
                    }
                },
                "severity": "WARNING"
            },
            "path": "dashboard/src/components/ModuleCard.js",
            "start": {
                "col": 41,
                "line": 67,
                "offset": 1876
            }
        },
        {
            "check_id": "typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml",
            "end": {
                "col": 58,
                "line": 100,
                "offset": 2672
            },
            "extra": {
                "dataflow_trace": {
                    "taint_sink": [
                        "CliLoc",
                        [
                            {
                                "end": {
                                    "col": 58,
                                    "line": 100,
                                    "offset": 2672
                                },
                                "path": "dashboard/src/components/ModuleCard.js",
                                "start": {
                                    "col": 40,
                                    "line": 100,
                                    "offset": 2654
                                }
                            },
                            "elements.join(' ')"
                        ]
                    ],
                    "taint_source": [
                        "CliLoc",
                        [
                            {
                                "end": {
                                    "col": 53,
                                    "line": 100,
                                    "offset": 2667
                                },
                                "path": "dashboard/src/components/ModuleCard.js",
                                "start": {
                                    "col": 40,
                                    "line": 100,
                                    "offset": 2654
                                }
                            },
                            "elements.join"
                        ]
                    ]
                },
                "fingerprint": "0e38abdb75f9019d3d2da904a0e716fcab6b15d4eba983b3f432cccc518c1c3b25712efbbbfbecb8394f05160938d7317fa9991d6711271886c2495a6afd3561_0",
                "is_ignored": false,
                "lines": "\t\t\t\tdangerouslySetInnerHTML={{ __html: elements.join(' ') }}",
                "message": "Detection of dangerouslySetInnerHTML from non-constant definition. This can inadvertently expose users to cross-site scripting (XSS) attacks if this comes  from user-provided input. If you have to use dangerouslySetInnerHTML, consider using a sanitization library such as DOMPurify to sanitize your HTML.",
                "metadata": {
                    "category": "security",
                    "confidence": "MEDIUM",
                    "cwe": [
                        "CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')"
                    ],
                    "cwe2021-top25": true,
                    "cwe2022-top25": true,
                    "impact": "MEDIUM",
                    "license": "Commons Clause License Condition v1.0[LGPL-2.1-only]",
                    "likelihood": "MEDIUM",
                    "owasp": [
                        "A07:2017 - Cross-Site Scripting (XSS)",
                        "A03:2021 - Injection"
                    ],
                    "references": [
                        "https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml"
                    ],
                    "shortlink": "https://sg.run/rAx6",
                    "source": "https://semgrep.dev/r/typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml",
                    "subcategory": [
                        "vuln"
                    ],
                    "technology": [
                        "react"
                    ]
                },
                "metavars": {
                    "$X": {
                        "abstract_content": "elements",
                        "end": {
                            "col": 48,
                            "line": 100,
                            "offset": 2662
                        },
                        "start": {
                            "col": 40,
                            "line": 100,
                            "offset": 2654
                        }
                    },
                    "$Y": {
                        "abstract_content": "join",
                        "end": {
                            "col": 53,
                            "line": 100,
                            "offset": 2667
                        },
                        "start": {
                            "col": 49,
                            "line": 100,
                            "offset": 2663
                        }
                    }
                },
                "severity": "WARNING"
            },
            "path": "dashboard/src/components/ModuleCard.js",
            "start": {
                "col": 40,
                "line": 100,
                "offset": 2654
            }
        },
        {
            "check_id": "typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml",
            "end": {
                "col": 30,
                "line": 103,
                "offset": 2221
            },
            "extra": {
                "dataflow_trace": {
                    "intermediate_vars": [
                        {
                            "content": "setting",
                            "location": {
                                "end": {
                                    "col": 37,
                                    "line": 69,
                                    "offset": 1408
                                },
                                "path": "dashboard/src/utils/common.js",
                                "start": {
                                    "col": 30,
                                    "line": 69,
                                    "offset": 1401
                                }
                            }
                        }
                    ],
                    "taint_sink": [
                        "CliLoc",
                        [
                            {
                                "end": {
                                    "col": 30,
                                    "line": 103,
                                    "offset": 2221
                                },
                                "path": "dashboard/src/utils/common.js",
                                "start": {
                                    "col": 17,
                                    "line": 103,
                                    "offset": 2208
                                }
                            },
                            "setting.label"
                        ]
                    ],
                    "taint_source": [
                        "CliLoc",
                        [
                            {
                                "end": {
                                    "col": 37,
                                    "line": 69,
                                    "offset": 1408
                                },
                                "path": "dashboard/src/utils/common.js",
                                "start": {
                                    "col": 30,
                                    "line": 69,
                                    "offset": 1401
                                }
                            },
                            "setting"
                        ]
                    ]
                },
                "fingerprint": "5c65b1866b472299bce6a8659e094dd0676d327638232655e8d624375df0ddb5c0664973ee7c979d5d68516a8dc99b9d3e17d7942b5e5e7b8e0a368a8a2a633a_0",
                "is_ignored": false,
                "lines": "\t\t\t\t\t\t\t\t__html: setting.label,",
                "message": "Detection of dangerouslySetInnerHTML from non-constant definition. This can inadvertently expose users to cross-site scripting (XSS) attacks if this comes  from user-provided input. If you have to use dangerouslySetInnerHTML, consider using a sanitization library such as DOMPurify to sanitize your HTML.",
                "metadata": {
                    "category": "security",
                    "confidence": "MEDIUM",
                    "cwe": [
                        "CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')"
                    ],
                    "cwe2021-top25": true,
                    "cwe2022-top25": true,
                    "impact": "MEDIUM",
                    "license": "Commons Clause License Condition v1.0[LGPL-2.1-only]",
                    "likelihood": "MEDIUM",
                    "owasp": [
                        "A07:2017 - Cross-Site Scripting (XSS)",
                        "A03:2021 - Injection"
                    ],
                    "references": [
                        "https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml"
                    ],
                    "shortlink": "https://sg.run/rAx6",
                    "source": "https://semgrep.dev/r/typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml",
                    "subcategory": [
                        "vuln"
                    ],
                    "technology": [
                        "react"
                    ]
                },
                "metavars": {
                    "$X": {
                        "abstract_content": "setting",
                        "end": {
                            "col": 37,
                            "line": 69,
                            "offset": 1408
                        },
                        "start": {
                            "col": 30,
                            "line": 69,
                            "offset": 1401
                        }
                    },
                    "$Y": {
                        "abstract_content": "div",
                        "end": {
                            "col": 11,
                            "line": 101,
                            "offset": 2157
                        },
                        "start": {
                            "col": 8,
                            "line": 101,
                            "offset": 2154
                        }
                    }
                },
                "severity": "WARNING"
            },
            "path": "dashboard/src/utils/common.js",
            "start": {
                "col": 17,
                "line": 103,
                "offset": 2208
            }
        },
        {
            "check_id": "typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml",
            "end": {
                "col": 55,
                "line": 154,
                "offset": 3409
            },
            "extra": {
                "dataflow_trace": {
                    "intermediate_vars": [
                        {
                            "content": "setting",
                            "location": {
                                "end": {
                                    "col": 37,
                                    "line": 69,
                                    "offset": 1408
                                },
                                "path": "dashboard/src/utils/common.js",
                                "start": {
                                    "col": 30,
                                    "line": 69,
                                    "offset": 1401
                                }
                            }
                        }
                    ],
                    "taint_sink": [
                        "CliLoc",
                        [
                            {
                                "end": {
                                    "col": 55,
                                    "line": 154,
                                    "offset": 3409
                                },
                                "path": "dashboard/src/utils/common.js",
                                "start": {
                                    "col": 43,
                                    "line": 154,
                                    "offset": 3397
                                }
                            },
                            "setting.text"
                        ]
                    ],
                    "taint_source": [
                        "CliLoc",
                        [
                            {
                                "end": {
                                    "col": 37,
                                    "line": 69,
                                    "offset": 1408
                                },
                                "path": "dashboard/src/utils/common.js",
                                "start": {
                                    "col": 30,
                                    "line": 69,
                                    "offset": 1401
                                }
                            },
                            "setting"
                        ]
                    ]
                },
                "fingerprint": "5c65b1866b472299bce6a8659e094dd0676d327638232655e8d624375df0ddb5c0664973ee7c979d5d68516a8dc99b9d3e17d7942b5e5e7b8e0a368a8a2a633a_1",
                "is_ignored": false,
                "lines": "\t\t\t\t\t\t\tdangerouslySetInnerHTML={{ __html: setting.text }}",
                "message": "Detection of dangerouslySetInnerHTML from non-constant definition. This can inadvertently expose users to cross-site scripting (XSS) attacks if this comes  from user-provided input. If you have to use dangerouslySetInnerHTML, consider using a sanitization library such as DOMPurify to sanitize your HTML.",
                "metadata": {
                    "category": "security",
                    "confidence": "MEDIUM",
                    "cwe": [
                        "CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')"
                    ],
                    "cwe2021-top25": true,
                    "cwe2022-top25": true,
                    "impact": "MEDIUM",
                    "license": "Commons Clause License Condition v1.0[LGPL-2.1-only]",
                    "likelihood": "MEDIUM",
                    "owasp": [
                        "A07:2017 - Cross-Site Scripting (XSS)",
                        "A03:2021 - Injection"
                    ],
                    "references": [
                        "https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml"
                    ],
                    "shortlink": "https://sg.run/rAx6",
                    "source": "https://semgrep.dev/r/typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml",
                    "subcategory": [
                        "vuln"
                    ],
                    "technology": [
                        "react"
                    ]
                },
                "metavars": {
                    "$X": {
                        "abstract_content": "setting",
                        "end": {
                            "col": 37,
                            "line": 69,
                            "offset": 1408
                        },
                        "start": {
                            "col": 30,
                            "line": 69,
                            "offset": 1401
                        }
                    },
                    "$Y": {
                        "abstract_content": "div",
                        "end": {
                            "col": 11,
                            "line": 153,
                            "offset": 3354
                        },
                        "start": {
                            "col": 8,
                            "line": 153,
                            "offset": 3351
                        }
                    }
                },
                "severity": "WARNING"
            },
            "path": "dashboard/src/utils/common.js",
            "start": {
                "col": 43,
                "line": 154,
                "offset": 3397
            }
        }
    ],
    "version": "1.0.0"
};

let items = data.errors;
let errorList = [];

errorList.push(
    <Grid container spacing={1} key={0}>
        <Grid container item spacing={1}>
            <React.Fragment>
                <Grid item xs={2}>
                    <Item><Typography variant="h5" component="h5">Error code</Typography></Item>
                </Grid>
                <Grid item xs={9}>
                    <Item><Typography variant="h5" component="h5">Error Message</Typography></Item>
                </Grid>
            </React.Fragment>
        </Grid>
    </Grid>
)

items.forEach((item, index) => {
    errorList.push(
        <Grid container spacing={1} key={index + 1}>
            <Grid container item spacing={1}>
                <React.Fragment>
                    <Grid item xs={2}>
                        <Item>{item.code}</Item>
                    </Grid>
                    <Grid item xs={9}>
                        <Item>{item.message}</Item>
                    </Grid>
                </React.Fragment>
            </Grid>
        </Grid>
    )
})

items = data.results;

let resultList = [];

resultList.push(
    <Grid container spacing={1} key={0}>
        <Grid container item spacing={1}>
            <React.Fragment>
                <Grid item xs={2}>
                    <Item><Typography variant="h5" component="h5" noWrap>Confidence</Typography></Item>
                </Grid>
                <Grid item xs={9}>
                    <Item><Typography variant="h5" component="h5" noWrap>Message</Typography></Item>
                </Grid>
            </React.Fragment>
        </Grid>
    </Grid>
)

items.forEach((item, index) => {
    resultList.push(
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Grid container spacing={1} key={index + 1} >
                    <Grid container item spacing={1} >
                        <React.Fragment>
                            <Grid item xs={2} style={{ height: '100%' }}>
                                <Item>{item.extra.metadata.confidence}</Item>
                            </Grid>
                            <Grid item xs={9} style={{ height: '100%' }}>
                                <Item><Typography noWrap>{item.extra.metadata.cwe}</Typography></Item>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={1} key={index + 1} >
                    <Grid container item spacing={1} >
                        <React.Fragment>
                            <Grid item xs={2} style={{ height: '100%' }}>
                                <Item>likelihood</Item>
                            </Grid>
                            <Grid item xs={9} style={{ height: '100%' }}>
                                <Item><Typography noWrap>{item.extra.metadata.likelihood}</Typography></Item>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                    <Grid container item spacing={1} >
                        <React.Fragment>
                            <Grid item xs={2} style={{ height: '100%' }}>
                                <Item>lines</Item>
                            </Grid>
                            <Grid item xs={9} style={{ height: '100%' }}>
                                <Item><Typography noWrap>{item.extra.lines}</Typography></Item>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                    <Grid container item spacing={1} >
                        <React.Fragment>
                            <Grid item xs={2} style={{ height: '100%' }}>
                                <Item>Path</Item>
                            </Grid>
                            <Grid item xs={9} style={{ height: '100%' }}>
                                <Item><Typography noWrap>{item.path}</Typography></Item>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
})

function SimpleAccordion() {
    return (
        <div>

        </div>
    );
}

export default function Report() {
    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{ flexGrow: 1 }} padding={5}>
                {errorList}
            </Box >
            <Divider component="li" variant="inset" padding={5}/>
            <Box sx={{ flexGrow: 1 }}>
                <Typography align='center' padding={2} color="black" backgroundColor="white" fontSize={30}>Findings</Typography>
            </Box >
            <Divider component="li" variant="inset" />
            <Box sx={{ flexGrow: 1, overflow:'auto', maxHeight:'100%', overflowY:'auto',display: "flex",flexDirection: "column" }} padding={5}>
                <Paper sx={{ flexGrow: 1, overflow:'auto', maxHeight:'100%', overflowY:'auto',display: "flex",flexDirection: "column" }}>{resultList}</Paper>
            </Box >
        </>
    );
}

