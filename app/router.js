'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { io } = app;
  const { controller: { jump } } = io;

  app.io.route('start', jump.index);
  app.io.route('jump', jump.jump);
};
