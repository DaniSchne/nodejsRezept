import { Service, Inject } from 'typedi';

import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';

@Service()
export default class RezeptService {
  constructor(

    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
) {}

    public async ReadItAll() {
      this.logger.silly('ReadItAll called ');


      this.eventDispatcher.dispatch(events.user.signUp);


      return { user: "Test", company: "Blub" };
    }
  }