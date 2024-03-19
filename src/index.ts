#!/usr/bin/env node

import { Command } from 'commander';
import open from 'open';

const program = new Command();

const BLOCKTORCH_DEBUGGER_URL = 'https://app.blocktorch.xyz/explorer/a6b7b927-934f-4f93-b504-864da065bc0c/0x762583066127e123938aaef11097220efa137a49f836ae98d3b78d8c9fa86a72?type=transaction&debugger=open';

program
  .version("1.0.0")
  .description("Blocktorch Debugger")

program
  .command('debug <transactionHash>')
  .description('Debug a transaction')
  .action((transactionHash) => {
    open(BLOCKTORCH_DEBUGGER_URL)
  });

program.parse(process.argv);
