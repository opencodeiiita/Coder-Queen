// ignore_for_file: unnecessary_new

import 'package:flutternews365/models/categories.dart';

List<CategoryModel> getCategories() {
  List<CategoryModel> myCategories = <CategoryModel>[];
  CategoryModel categoryModel;

  //1
  categoryModel = new CategoryModel();
  categoryModel.name = "Business";
  categoryModel.imageUrl =
      "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8";
  myCategories.add(categoryModel);

  //2
  categoryModel = new CategoryModel();
  categoryModel.name = "Entertainment";
  categoryModel.imageUrl =
      "https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVudGVydGFpbm1lbnR8ZW58MHx8MHx8&ixlib";
  myCategories.add(categoryModel);

  //3
  categoryModel = new CategoryModel();
  categoryModel.name = "General";
  categoryModel.imageUrl =
      "https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2VuZXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1";
  myCategories.add(categoryModel);

  //4
  categoryModel = new CategoryModel();
  categoryModel.name = "Health";
  categoryModel.imageUrl =
      "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWx0aHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1";
  myCategories.add(categoryModel);

  //5
  categoryModel = new CategoryModel();
  categoryModel.name = "Science";
  categoryModel.imageUrl =
      "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaWVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1";
  myCategories.add(categoryModel);

  //6
  categoryModel = new CategoryModel();
  categoryModel.name = "Sports";
  categoryModel.imageUrl =
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1";
  myCategories.add(categoryModel);

  //7
  categoryModel = new CategoryModel();
  categoryModel.name = "Technology";
  categoryModel.imageUrl =
      "https://images.unsplash.com/photo-1484180908703-ca5274b7d10f?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw2ODQ4MDE0MHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1";
  myCategories.add(categoryModel);

  return myCategories;
}
