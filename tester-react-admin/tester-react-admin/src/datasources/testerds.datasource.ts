import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'testerds',
  connector: 'mongodb',
  url: '',
  host: 'revivo',
  port: 3005,
  user: 'reload',
  password: 'vios123',
  database: 'testerdb',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TesterdsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'testerds';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.testerds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
