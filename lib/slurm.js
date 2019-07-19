'use strict';

module.exports = {
  allocate: ( gpu, count, dir ) => {
    let cores = ( gpu ? `gpu --gres=gpu:volta:${count}` : 'normal' )

    return `salloc --immediate=60 -p ${cores} --constraint=xeon-e5 --qos=high -D ${dir}`
  },
  allocateAndRun: ( gpu, count, dir, run ) => {

    let command = `${module.exports.allocate( gpu, count, dir )} srun  --pty ${run} -i`

    return command
  }
}
