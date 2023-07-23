## UI tests

Part II. Testing us 

## Requirements

* Typescript
* Package manager npx / yarn

## How to clone and run the project

1. Clone project locally

    ```shell
    $ git clone git@github.com:Aikisz/ui-tests.git
    ```

2. Runing the tests <br>

    In the command line:

    ```shell
    $ yarn cypress run
    ```           
   
    In the cypress in the UI:
                
   ```shell 
    yarn cypress open
   ```     

   > **By default the test will run with the `qa baseUrl and variables` which are set in the `cypress.config.ts` file, to use the `master baseUrl and variables` use the `:master` suffix e.g. `yarn cypress run :master`**<br>

