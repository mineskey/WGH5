import Taro from "@tarojs/taro";

// api请求封装
const htttRequest = function (url, paramet, method, showToast) {
  // 获取token
  const token = Taro.getStorageSync("Info");

  if (showToast) {
    Taro.showLoading({
      title: "加载中",
    });
  }

  return new Promise((resolve, reject) => {
    Taro.request({
      url: url,
      data: paramet,
      method: method,
      header: {
        "content-type": "application/json",
        Authorization: token.accessToken ? token.accessToken : "",
      },
    })
      .then((res) => {
        Taro.hideLoading();
        switch (res.statusCode) {
          case 200:
            return resolve(res.data);

          case 10014:
            // token校验失败
            Taro.navigateTo({
              url: "/pages/login/index",
            });
            Taro.clearStorageSync();
            return reject(res.data);

          case 10002:
            // 缺少商户信息
            Taro.navigateTo({
              url: "/pages/login/index",
            });
            return reject(res.data);

          default:
            setTimeout(() => {
              Taro.showToast({
                title: res.data.comments,
                icon: "none",
              });
            }, 500);
        }
      })
      .catch((err) => {
        Taro.showToast({
          title: "数据获取失败",
          icon: "none",
        });
        return reject(err);
      });
  });
};

export default htttRequest;
