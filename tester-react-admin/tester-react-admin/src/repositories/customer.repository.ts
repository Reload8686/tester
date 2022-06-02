import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TesterdsDataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.CID,
  CustomerRelations
> {
  constructor(
    @inject('datasources.testerds') dataSource: TesterdsDataSource,
  ) {
    super(Customer, dataSource);
  }
}
