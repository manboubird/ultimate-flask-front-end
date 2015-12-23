# -*- coding: utf-8 -*-

from flask.ext.elasticsearch import FlaskElasticsearch

es = FlaskElasticsearch()

class ElasticsearchService():

    def search(self, index, **kwargs):
        res = es.search(index, **kwargs)
        return res

