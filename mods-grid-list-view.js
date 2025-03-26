/* ==UserStyle==
@name           NexusMods list view
@namespace      github.com/openstyles/stylus
@version        1.0.0
@description    Style the mods grid into a list view.
@author         jmharris
==/UserStyle== */
@-moz-document url-prefix("https://www.nexusmods.com") {
    div.mods-grid {
        grid-template-columns: none;
        row-gap: 1.5rem;

        div.group\/mod-tile {
            min-height: 217px;

            > div.relative {
                width: 385px;
                position: absolute;
            }

            > div.px-3.pb-5.pt-3,
            > div.min-h-8.px-3 {
                padding-left: 400px;

                > div.divide-y > div.flex {
                    display: inline-block;
                    vertical-align: top;
                    padding-right: 1.5rem;



                    > a {
                        vertical-align: top;
                    }
                    > p.text-neutral-subdued {
                        vertical-align: top;
                        display: inline-block;
                        padding-right: 1.5rem;

                        > svg {
                            display: inline-block;
                            margin-right: 3px;
                        }
                    }
                }
            }
        }
    }
}
