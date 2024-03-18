#!/usr/bin/env node

import { program } from "commander";
import open from "open";

const BLOCKTORCH_DEBUGGER_URL = 'https://app.blocktorch.xyz/explorer/afdd126c-d4aa-4d08-9f7e-65b89fbc04bd/0x0ee6fb0f64da3432429a1500122c1b59c50db1bb2da6dcb9c527fd02722639d6?type=transaction&debugger=open';

program
  .version("1.0.0")
  .description("Blocktorch Debugger")
  .option("-tx, --tx-hash <string>", "Transaction hash to debug")
  .action((options) => {
    open(BLOCKTORCH_DEBUGGER_URL)
  });

program.parse(process.argv);
