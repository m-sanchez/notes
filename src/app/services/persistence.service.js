
function persistenceService($window) {
  const service = {
    getStorage,
    setStorage
  };

  function getStorage(key) {
    return angular.fromJson($window.localStorage.getItem(key));
  }

  function setStorage(key, value) {
    if (value) {
      $window.localStorage.setItem(key, angular.toJson(value));
    } else {
      $window.localStorage.removeItem(key);
    }
  }

  return service;
}

module.exports = persistenceService;
