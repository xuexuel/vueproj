import Vue from 'vue';

import settings from '@/settings';
import { ErrorLogModule } from '@/store/modules/error-log';
import { isArray } from '@/utils/validate';

const { errorLog: needErrorLog } = settings

const checkNeed = () => {
  const env = process.env.NODE_ENV
  if (isArray(needErrorLog) && env) {
    return needErrorLog.includes(env)
  }
  return false
}

if (checkNeed()) {
  Vue.config.errorHandler = function(err, vm, info) {
    ErrorLogModule.AddErrorLog({
      err,
      vm,
      info,
      url: window.location.href
    })
  }
}
