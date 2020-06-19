import { Container } from 'typedi';
import expressLoader from './express';
import { useContainer } from "typeorm";
import mysqlLoader from './mysql';
// import jobsLoader from './jobs';
import Logger from './logger';
import dependencyInjectorLoader from './dependencyInjector';

//We have to import at least all the events once so they can be triggered
import './events';

export default async ({ expressApp }) => {

  // Container.set('logger', Logger)

  useContainer(Container);
  
  await mysqlLoader();
  Logger.info('✌️ DB loaded and connected!');

  const customerModel = {
    name: 'customerModel',
    // Notice the require syntax and the '.default'
    model: require('../models/customer').default,
  };

   await dependencyInjectorLoader({
    models: [
      customerModel,
      // salaryModel,
      // whateverModel
    ],
  });
  Logger.info('✌️ Dependency Injector loaded');


  /**
   * WTF is going on here?
   *
   * We are injecting the mongoose models into the DI container.
   * I know this is controversial but will provide a lot of flexibility at the time
   * of writing unit tests, just go and check how beautiful they are!
   */

//   const userModel = {
//     name: 'userModel',
//     // Notice the require syntax and the '.default'
//     model: require('../models/user').default,
//   };

  // It returns the agenda instance because it's needed in the subsequent loaders
//   const { agenda } = await dependencyInjectorLoader({
//     mongoConnection,
//     models: [
//       userModel,
      // salaryModel,
      // whateverModel
//     ],
//   });
//   Logger.info('✌️ Dependency Injector loaded');

//   await jobsLoader({ agenda });
//   Logger.info('✌️ Jobs loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};