# About

Interactive NodeJS CLI for browsing SF food trucks open at the present time. Input delegated to command modules from a `readline` event handler. Paginated data fetched via `axios` on an on-demand basis with embedded Socrata queries; results cached to eliminate redundant requests.

# Instructions

(Assumes node is installed on machine)

- `npm i` within root to install dependencies
- `npm start` to launch CLI

# Example

```
npm start


    commands:

    display (d) ............ display current page of results
    prev (p) ............... view previous page of results
    next (n) ............... view next page of results
    jump (j) <number> ...... jump to particular page
    help (h) ............... show command list
    quit (q) ............... terminate session
d

Page 1 --- Monday, 10:06 AM

        NAME | ADDRESS

        Anas Goodies Catering | 368 ELM ST
        Anas Goodies Catering | 1411 MARKET ST
        Anas Goodies Catering | 2150 CESAR CHAVEZ ST
        Anas Goodies Catering | 150 OTIS ST
        Athena SF Gyro | 699 08TH ST
        Authentic India | 1355 MARKET ST
        Bay Area Dots, LLC | 567 BAY ST
        Bay Area Dots, LLC | 900 BEACH ST
        Bay Area Mobile Catering, Inc. dba. Taqueria Angelica's | 1455 MARKET ST
        Bay Area Mobile Catering, Inc. dba. Taqueria Angelica's | 1301 CESAR CHAVEZ ST
n

Page 2 --- Monday, 10:06 AM

        NAME | ADDRESS

        BH & MT LLC | 2145 MARKET ST
        BH & MT LLC | 1477 GROVE ST
        BH & MT LLC | 3253 16TH ST
        Bonito Poke | 400 HOWARD ST
        BOWL'D ACAI, LLC. | 451 MONTGOMERY ST
        Buenafe | 901 16TH ST
        Casey's Pizza, LLC | 231 SANSOME ST
        CC Acquisition LLC | 298 MARKET ST
        CC Acquisition LLC | 525 MARKET ST
        Chairman SF, LLC | 34 ELLIS ST
j 10

Page 10 --- Monday, 10:06 AM

        NAME | ADDRESS

        May Catering | Assessors Block 8727/Lot005
        May Catering | Assessors Block 3810/Lot008
        May Catering | 2130 HARRISON ST
        May Catering | 2000 FOLSOM ST
        May Catering | Assessors Block 4347a/Lot004
        May Catering | 501 ALABAMA ST
        Mike's Catering | Assessors Block 8722/Lot005
        Mike's Catering | 860 BROADWAY
        Mike's Catering | Assessors Block 3788/Lot002
        Mike's Catering | Assessors Block 4228/Lot080
j 80

Page 80 --- Monday, 10:06 AM

        No results for this page
q
```
