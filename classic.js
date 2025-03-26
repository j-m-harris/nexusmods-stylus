/* ==UserStyle==
@name           NexusMods classic
@namespace      github.com/openstyles/stylus
@version        1.0.0
@description    Theme inspired by classic colours.
@author         jmharris
==/UserStyle== */
@-moz-document url-prefix("https://www.nexusmods.com") {
    .sm\:typography-heading-lg {
        font-size: 1.5rem;
        font-weight: 400;
    }
    .typography-body-xl {
        font-size: 1rem;
    }
    .typography-body-lg {
        font-size: 0.85rem;
    }
    .typography-body-md {
        font-size: .75rem;
    }
    #mainContent {
        > div.relative > div.next-container.relative {
            background-color: #434343;
            > div.pb-20.pt-8 > section[aria-labelledby="more-mods-header"] > div.border-stroke-weak.border-t.pt-4 > div.xs\:items-start.mb-6.flex.flex-col.gap-2.sm\:flex-row > div:after {
                background: none;
            }
        }
        > div.relative > div.next-container-fluid {
            background-color: #434343;
            > div.border-stroke-subdued {
                padding-bottom: 0;
                border-bottom: none;
            }
            > div.border-stroke-subdued > div.flex {
                margin-top: 0.5em;
            }
            > div.border-stroke-subdued > div.flex > div.flex {
                column-gap: 0.75em;
            }
            > div.border-stroke-subdued > div.flex > div.flex > img {
                height: 2rem;
            }
            > div.border-stroke-subdued > div.flex > div.flex > div.w-full > h3 {
                display: none;
            }
            > div.sm\:flex {
                > div.peer\/filters,
                > div.w-full {
                    padding-top: 1em;
                }
            }
        }
        div.mods-grid {
            grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
            column-gap: 0.8rem;
            row-gap: 0.8rem;

            > div.group\/mod-tile {
                background-color: #373737;
                > div.px-3.pb-5.pt-3 {
                    padding-bottom: 0.75rem;
                }
                > div.relative > a > div.group\/image {
                    background-color: #2c2e2d !important;
                }
                > div.min-h-8 {
                    background-color: #2c2e2d;
                }
                > div.relative > a > div.group\/image:hover > img {
                    transform: none;
                }
                a {
                    color: #da944c;
                    font-weight: 600;
                }
                a[data-e2eid="mod-tile-title"],
                time {
                    color: #efedf0;
                }
                p[data-e2eid="mod-tile-updated"] {
                    svg {
                        display: none;
                    }
                    &::before {
                        content: "Last update:";
                        color: #737270;
                    }
                }
                p[data-e2eid="mod-tile-uploaded"] {
                    svg {
                        display: none;
                    }
                    &::before {
                        content: "Uploaded:";
                        color: #737270;
                    }
                }
            }
        }
    }
}
